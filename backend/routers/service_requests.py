from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional
import json
from database import get_db
import models
from catalog import public_portals, PORTALS

router = APIRouter(prefix="/api/admin/service-requests", tags=["service-requests"], redirect_slashes=False)


class SRUpdate(BaseModel):
    label: Optional[str] = None
    description: Optional[str] = None
    group_name: Optional[str] = None
    enabled: Optional[bool] = None
    portal_ids: Optional[list[str]] = None


def _to_dict(sr: models.ServiceRequestConfig) -> dict:
    return {
        "type_key": sr.type_key,
        "home_portal_id": sr.home_portal_id,
        "label": sr.label,
        "description": sr.description or "",
        "group_name": sr.group_name,
        "enabled": sr.enabled,
        "portal_ids": json.loads(sr.portal_ids or "[]"),
        "fields": json.loads(sr.fields_json or "[]"),
        "updated_at": sr.updated_at.isoformat() if sr.updated_at else None,
    }


@router.get("/portals")
def list_portals():
    return [{"id": p["id"], "name": p["name"]} for p in PORTALS]


@router.get("/")
def list_sr(portal_id: Optional[str] = None, db: Session = Depends(get_db)):
    all_srs = db.query(models.ServiceRequestConfig).order_by(
        models.ServiceRequestConfig.home_portal_id,
        models.ServiceRequestConfig.label,
    ).all()
    if not portal_id:
        return [_to_dict(sr) for sr in all_srs]
    result = []
    for sr in all_srs:
        pids = json.loads(sr.portal_ids or "[]")
        if sr.home_portal_id == portal_id or portal_id in pids:
            result.append(_to_dict(sr))
    return result


@router.delete("/{type_key}")
def delete_sr(type_key: str, db: Session = Depends(get_db)):
    sr = db.query(models.ServiceRequestConfig).filter_by(type_key=type_key).first()
    if not sr:
        raise HTTPException(404, "Service request not found")
    db.delete(sr)
    db.commit()
    return {"deleted": type_key}


@router.patch("/{type_key}")
def update_sr(type_key: str, body: SRUpdate, db: Session = Depends(get_db)):
    sr = db.query(models.ServiceRequestConfig).filter_by(type_key=type_key).first()
    if not sr:
        raise HTTPException(404, "Service request not found")
    if body.label is not None:
        sr.label = body.label
    if body.description is not None:
        sr.description = body.description
    if body.group_name is not None:
        sr.group_name = body.group_name
    if body.enabled is not None:
        sr.enabled = body.enabled
    if body.portal_ids is not None:
        sr.portal_ids = json.dumps(body.portal_ids)
    db.commit()
    db.refresh(sr)
    return _to_dict(sr)


@router.post("/sync")
def sync_from_catalog(db: Session = Depends(get_db)):
    """Add any new SR types from the catalog; preserve existing customisations."""
    portals = public_portals()
    added = 0
    for portal in portals:
        seen: set[str] = set()
        for rt in portal["request_types"]:
            name = rt["name"]
            if name in seen:
                continue
            seen.add(name)
            existing = db.query(models.ServiceRequestConfig).filter_by(type_key=rt["key"]).first()
            if not existing:
                db.add(models.ServiceRequestConfig(
                    type_key=rt["key"],
                    home_portal_id=portal["id"],
                    label=name,
                    description=rt.get("description", ""),
                    group_name=rt.get("group"),
                    enabled=True,
                    portal_ids=json.dumps([portal["id"]]),
                    fields_json=json.dumps(rt.get("fields", [])),
                ))
                added += 1
    db.commit()
    total = db.query(models.ServiceRequestConfig).count()
    return {"synced": added, "total": total}
