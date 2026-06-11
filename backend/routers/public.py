from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional
from database import get_db
import models, auth as auth_utils
from constants import TICKET_TYPES, TICKET_FORM_FIELDS, get_initial_status, get_approvers_for_ticket, NUCLEUS_APPROVERS, COMMANDO_APPROVERS

router = APIRouter(prefix="/api/public", tags=["public"])


class PublicTicketCreate(BaseModel):
    submitter_name: str
    submitter_email: str
    ticket_type: str
    field_values: list[dict] = []


def _next_ticket_number(db: Session) -> str:
    from sqlalchemy import func
    last = db.query(func.max(models.Ticket.ticket_number)).scalar()
    if last:
        try:
            num = int(last.split("-")[1]) + 1
        except Exception:
            num = db.query(models.Ticket).count() + 1
    else:
        num = 1
    return f"IT-{num:05d}"


def _get_or_create_guest(db: Session, name: str, email: str) -> models.User:
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        user = models.User(
            email=email,
            password_hash=auth_utils.hash_password("guest-portal-user"),
            full_name=name,
            role="customer",
        )
        db.add(user)
        db.flush()
    return user


@router.get("/ticket-types")
def get_ticket_types():
    return TICKET_TYPES


@router.get("/form-fields/{ticket_type}")
def get_form_fields(ticket_type: str):
    if ticket_type not in TICKET_FORM_FIELDS:
        raise HTTPException(status_code=404, detail="Unknown ticket type")
    return TICKET_FORM_FIELDS[ticket_type]


@router.post("/tickets", status_code=201)
def create_public_ticket(body: PublicTicketCreate, db: Session = Depends(get_db)):
    if body.ticket_type not in TICKET_TYPES:
        raise HTTPException(status_code=400, detail="Invalid ticket type")

    reporter = _get_or_create_guest(db, body.submitter_name, body.submitter_email)
    initial_status = get_initial_status(body.ticket_type)

    # Auto-generate title from fields
    fv_map = {fv["field_key"]: fv["field_value"] for fv in body.field_values}
    type_label = TICKET_TYPES[body.ticket_type]

    if body.ticket_type == "onboarding":
        title = f"Colleague Onboarding - {fv_map.get('preferred_email', body.submitter_email)}"
    elif body.ticket_type == "offboarding":
        colleague = fv_map.get("full_name") or fv_map.get("colleague_email") or fv_map.get("employee_email", body.submitter_email)
        title = f"Colleague Offboarding - {colleague}"
    elif body.ticket_type == "system_problem":
        title = f"System Problem - {fv_map.get('affected_system', 'Unknown')}"
    elif body.ticket_type.startswith("access_"):
        title = f"{type_label} - {fv_map.get('requested_for', body.submitter_email)}"
    else:
        title = f"{type_label} - {body.submitter_email}"

    ticket = models.Ticket(
        ticket_number=_next_ticket_number(db),
        title=title,
        ticket_type=body.ticket_type,
        status=initial_status,
        priority="P3",
        reporter_id=reporter.id,
    )
    db.add(ticket)
    db.flush()

    for fv in body.field_values:
        if fv.get("field_value"):
            db.add(models.TicketFieldValue(
                ticket_id=ticket.id,
                field_key=fv["field_key"],
                field_value=fv["field_value"],
            ))

    # Auto-assign approvers — look up from DB first, fall back to constants
    approvers = []
    module_val = fv_map.get("nucleus_module") or fv_map.get("access_type", "")
    if module_val and body.ticket_type in ("access_nucleus", "access_commando"):
        rule = db.query(models.ApproverRule).filter_by(
            ticket_type=body.ticket_type,
            module_value=module_val
        ).first()
        if rule:
            approvers = [a.strip() for a in rule.approvers.split(",") if a.strip()]
    if not approvers:
        approvers = get_approvers_for_ticket(body.ticket_type, fv_map)
    if approvers:
        db.add(models.TicketFieldValue(
            ticket_id=ticket.id,
            field_key="_approvers",
            field_value=", ".join(approvers),
        ))

    db.add(models.TicketHistory(
        ticket_id=ticket.id,
        changed_by_id=reporter.id,
        field_name="status",
        old_value=None,
        new_value=initial_status,
    ))

    db.commit()
    return {"ticket_number": ticket.ticket_number, "status": ticket.status, "title": ticket.title}


@router.get("/tickets/{ticket_number}")
def get_public_ticket(ticket_number: str, db: Session = Depends(get_db)):
    """Public ticket lookup by ticket number (CPH-XXXXX or IT-XXXXX)."""
    ticket = db.query(models.Ticket).filter(
        models.Ticket.ticket_number == ticket_number.upper()
    ).first()
    if not ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")

    fv = {f.field_key: f.field_value for f in ticket.field_values if not f.field_key.startswith("_")}
    linked = None
    if ticket.linked_ticket:
        linked = {
            "ticket_number": ticket.linked_ticket.ticket_number,
            "title": ticket.linked_ticket.title,
            "status": ticket.linked_ticket.status,
            "portal_source": ticket.linked_ticket.portal_source,
        }

    return {
        "ticket_number": ticket.ticket_number,
        "title": ticket.title,
        "status": ticket.status,
        "priority": ticket.priority,
        "ticket_type": ticket.ticket_type,
        "portal_source": ticket.portal_source,
        "created_at": ticket.created_at.isoformat(),
        "updated_at": ticket.updated_at.isoformat(),
        "assignee": ticket.assignee.full_name if ticket.assignee else None,
        "field_values": fv,
        "linked_ticket": linked,
    }
