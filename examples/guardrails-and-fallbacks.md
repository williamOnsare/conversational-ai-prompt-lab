# Guardrails & Fallback Behaviour

A conversational AI system should define what happens when it cannot
confidently or safely complete a request.

The objective is not to make the model answer everything.

The objective is to make the overall system behave predictably.

## Example Decision Flow

```text
Incoming Message
       ↓
Intent Classification
       ↓
Confidence Check
       ↓
 ┌───────────────┬────────────────┐
 │ High          │ Low            │
 │ Confidence    │ Confidence     │
 ▼               ▼
Continue         Escalate
AI Workflow      to Human
```

## Example Rules

- **Low Confidence**:
  If classification confidence falls below the application's defined threshold,
  the workflow should avoid confidently generating a response and instead route
  the conversation for human review.

- **Unsupported Request**:
  If the request falls outside the supported intent set, the system should
  provide an appropriate fallback rather than inventing an answer.

- **Human Request**:
  If the customer explicitly requests a human agent, the workflow should respect
  that request and initiate the appropriate escalation path.

- **Principle**:
  A useful conversational AI system is not defined only by how well it answers
  normal requests. It is also defined by how predictably it behaves when things go wrong.
