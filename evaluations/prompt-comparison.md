# Prompt Version Comparison

## Version A

- 420 input tokens
- General instructions
- No explicit output schema

## Version B

- 265 input tokens
- Structured instruction hierarchy
- Explicit JSON schema
- Clear escalation rules

## Hypothetical Evaluation

| Metric | Version A | Version B |
|---|---:|---:|
| Valid JSON | 91% | 99% |
| Correct classification | 89% | 95% |
| Escalation accuracy | 82% | 94% |
| Avg prompt tokens | 420 | 265 |

## Conclusion

Version B demonstrates that better instruction structure can improve output reliability while reducing unnecessary prompt context.