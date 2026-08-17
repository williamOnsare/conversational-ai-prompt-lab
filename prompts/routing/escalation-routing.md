# Human Escalation Router

## Objective

Determine whether an AI-generated response should be sent automatically
or reviewed by a human agent.

## Escalate When

- confidence < 0.75
- customer expresses legal threats
- refund/payment exception is requested
- sensitive personal information is involved
- the model cannot answer from trusted context
- conversation sentiment indicates severe frustration
- request falls outside supported workflows

## Output

{
  "route": "ai_response | human_review",
  "confidence": 0.0,
  "reason": "string"
}