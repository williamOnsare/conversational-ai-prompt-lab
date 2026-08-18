# Conversational AI Prompt Lab — Architecture

## 1. Purpose

The Conversational AI Prompt Lab is a small, public portfolio project demonstrating practical prompt-engineering and conversational-AI development skills.

The lab focuses on designing, structuring, testing, evaluating, and iterating on prompts for realistic customer-service and conversational workflows.

The goal is not to present a production contact-centre platform. Instead, the repository demonstrates the engineering thinking behind production conversational AI systems:

- Clear system and role instructions
- Structured conversational flows
- Few-shot examples
- Output constraints
- Guardrails and fallback behaviour
- Edge-case handling
- Prompt versioning
- Repeatable evaluation
- A/B comparison of prompt variants
- Measurement-driven iteration
- Separation between prompt logic and evaluation data

The architecture is intentionally lightweight so that the project remains easy to review, reproduce, and extend.

---

## 2. High-Level Architecture

The lab follows a simple evaluation loop:

```text
                    ┌──────────────────────┐
                    │   Conversation       │
                    │   Use Case / Goal    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Prompt Definition  │
                    │                      │
                    │ System instructions  │
                    │ Rules / constraints  │
                    │ Few-shot examples    │
                    │ Fallback behaviour   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      LLM / Model     │
                    │                      │
                    │ OpenAI / Gemini /    │
                    │ compatible provider  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Model Output     │
                    │                      │
                    │ Response / decision  │
                    │ Structured output    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Evaluation       │
                    │                      │
                    │ Accuracy             │
                    │ Policy adherence     │
                    │ Tone                 │
                    │ Format compliance    │
                    │ Edge-case handling   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Results & Analysis   │
                    │                      │
                    │ Baseline vs variant  │
                    │ Failure analysis     │
                    │ Recommendations      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Prompt Iteration     │
                    │                      │
                    │ Improve → Test →     │
                    │ Evaluate → Repeat    │
                    └──────────────────────┘