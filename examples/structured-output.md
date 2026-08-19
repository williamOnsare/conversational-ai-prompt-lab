# Structured Output

When an LLM is part of a software workflow, free-form text is often difficult
for application code to consume reliably.

A structured response makes the model's output easier to validate and route.

## Example

```json
{
  "intent": "billing_issue",
  "confidence": 0.91,
  "requires_human": false,
  "reason": "The customer reports a possible duplicate charge."
}
```


## Why This Matters

Structured outputs can support downstream application logic such as:

```text
LLM
 ↓
Validate output
 ↓
Read intent
 ↓
Determine confidence
 ↓
Route workflow
 ├── Automated response
 └── Human escalation
 ```


## Important Consideration

Structured output alone does not guarantee correctness.

The application should still validate:

* Required fields
* Allowed enum values
* Data types
* Confidence ranges
* Unexpected or missing fields