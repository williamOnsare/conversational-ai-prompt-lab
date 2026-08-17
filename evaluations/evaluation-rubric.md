# Prompt Evaluation Rubric

Each prompt version is evaluated against:

| Metric | Description |
|---|---|
| Accuracy | Correctness of classification or response |
| Instruction adherence | Whether system rules were followed |
| Hallucination rate | Unsupported claims |
| Output validity | Whether expected JSON/schema is returned |
| Escalation accuracy | Correct human-vs-AI routing |
| Response length | Unnecessary verbosity |
| Latency | Time required to produce a response |
| Token efficiency | Prompt + completion token usage |
| Cost | Estimated inference cost |

## Scoring

Each test case receives a score from 1-5 for qualitative criteria.

The preferred prompt is not necessarily the longest prompt.

The objective is to maximise usefulness and reliability while minimising unnecessary context, latency and cost.