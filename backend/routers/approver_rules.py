from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional
from database import get_db
import models
from deps import get_current_user, require_agent
from constants import NUCLEUS_APPROVERS, COMMANDO_APPROVERS

router = APIRouter(prefix="/api/approver-rules", tags=["approver-rules"])


def _seed_if_empty(db: Session):
    """Seed approver rules from constants if DB table is empty."""
    if db.query(models.ApproverRule).count() == 0:
        for module, approvers in NUCLEUS_APPROVERS.items():
            if module == "_default":
                continue
            db.add(models.ApproverRule(
                ticket_type="access_nucleus",
                module_value=module,
                approvers=", ".join(approvers),
            ))
        for module, approvers in COMMANDO_APPROVERS.items():
            if module == "_default":
                continue
            db.add(models.ApproverRule(
                ticket_type="access_commando",
                module_value=module,
                approvers=", ".join(approvers),
            ))
        db.commit()


@router.get("")
def list_rules(
    ticket_type: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    _seed_if_empty(db)
    q = db.query(models.ApproverRule)
    if ticket_type:
        q = q.filter(models.ApproverRule.ticket_type == ticket_type)
    return q.order_by(models.ApproverRule.ticket_type, models.ApproverRule.module_value).all()


class RuleUpdate(BaseModel):
    approvers: str


class RuleCreate(BaseModel):
    ticket_type: str
    module_value: str
    approvers: str


@router.put("/{rule_id}")
def update_rule(
    rule_id: int,
    body: RuleUpdate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(require_agent),
):
    rule = db.query(models.ApproverRule).filter_by(id=rule_id).first()
    if not rule:
        raise HTTPException(status_code=404, detail="Rule not found")
    rule.approvers = body.approvers
    db.commit()
    db.refresh(rule)
    return rule


@router.post("")
def create_rule(
    body: RuleCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(require_agent),
):
    rule = models.ApproverRule(
        ticket_type=body.ticket_type,
        module_value=body.module_value,
        approvers=body.approvers,
    )
    db.add(rule)
    db.commit()
    db.refresh(rule)
    return rule


@router.delete("/{rule_id}", status_code=204)
def delete_rule(
    rule_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(require_agent),
):
    rule = db.query(models.ApproverRule).filter_by(id=rule_id).first()
    if not rule:
        raise HTTPException(status_code=404, detail="Rule not found")
    db.delete(rule)
    db.commit()
