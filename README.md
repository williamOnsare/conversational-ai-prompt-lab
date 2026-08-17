# Conversational AI Prompt Lab

A practical exploration of prompt engineering, conversational workflows,
LLM evaluation, structured outputs and guardrails for production-oriented AI systems.

## Why I Built This

My professional work has increasingly involved integrating AI into software products,
particularly conversational customer-support workflows.

Most of that production work is proprietary, so this repository contains
reconstructed and synthetic examples rather than confidential prompts, customer data,
or internal business logic.

The goal is to demonstrate how I think about:

- Prompt architecture
- System and role instructions
- Few-shot prompting
- Structured JSON outputs
- Intent classification
- Conversational routing
- Guardrails and fallback behaviour
- Prompt evaluation
- Versioning and A/B testing
- Token and latency awareness
- Human-in-the-loop AI

## Background

I have worked on ChatSasa, an AI-assisted, human-supervised omnichannel
customer-support platform where OpenAI APIs were integrated into customer-support
workflows.

My work included AI-assisted response generation, message classification,
routing logic and human review workflows.

## Repository Structure

### `prompts/`
Reusable prompt examples organised by purpose.

### `evaluations/`
Synthetic test cases, evaluation criteria and prompt comparisons.

### `examples/`
Examples demonstrating specific prompt-engineering techniques.

### `scripts/`
Small utilities for evaluating or comparing prompt behaviour.

### `docs/`
Architecture and design notes.

## Featured Experiments

### 1. Intent Classification
Structured classification with JSON output and human escalation.

→ [View prompt](prompts/classification/support-intent.md)

### 2. Conversational Response Generation
Context-aware response generation with guardrails.

→ [View prompt](prompts/response-generation/support-response.md)

### 3. Prompt Evaluation
Synthetic test cases and prompt-version comparison.

→ [View evaluation](evaluations/prompt-comparison.md)


## Engineering Principles

I generally optimise for:

1. Clear instruction hierarchy
2. Deterministic and structured outputs
3. Explicit failure behaviour
4. Minimal unnecessary context
5. Human escalation when confidence is low
6. Measurable evaluation rather than subjective prompt tweaking

## Disclaimer

All examples are synthetic or reconstructed demonstrations.
No proprietary prompts, customer data, credentials, internal workflows,
or confidential ChatSasa implementation details are included.
