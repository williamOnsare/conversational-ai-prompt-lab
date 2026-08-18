# Conversational AI Prompt Lab

A practical, production-oriented exploration of **prompt engineering, conversational AI workflows, structured outputs, LLM evaluation, guardrails, and human-in-the-loop systems**.

This repository demonstrates how I approach designing AI-assisted workflows that are not only capable of producing useful responses, but are also **structured, testable, predictable, and safe enough to integrate into real software products**.

> **Note:** The examples in this repository are synthetic or reconstructed. They are intentionally designed to demonstrate engineering thinking without exposing proprietary prompts, customer data, credentials, or confidential business logic.

---

## Why I Built This

My professional work has increasingly involved integrating AI into software products, particularly conversational customer-support workflows.

Most of that production work is proprietary, so this repository serves as a public demonstration of the engineering principles and problem-solving approaches I use when working with LLM-powered systems.

The lab focuses on questions such as:

- How should a system prompt be structured?
- How can an LLM return predictable, machine-readable output?
- How should ambiguous user messages be classified and routed?
- When should an AI response be generated versus escalated to a human?
- How can prompt changes be evaluated systematically rather than by intuition?
- How do prompt length and context affect token usage, latency, and reliability?
- How should conversational workflows behave when the model encounters an unexpected input?
- How can AI-generated responses operate safely within an existing software workflow?

---

## Background

I have worked on **ChatSasa**, an AI-assisted, human-supervised omnichannel customer-support platform where OpenAI APIs were integrated into customer-support workflows.

The platform evolved from an internal instant-messaging and collaboration product into a human-agent customer-support platform and subsequently into an AI-assisted customer-support solution.

My work included frontend implementation and AI-related product integration involving areas such as:

- AI-assisted response generation
- Message and intent classification
- Conversational routing
- Context-aware response workflows
- Human review and escalation
- Structured AI outputs
- Integration of OpenAI APIs into application workflows

Because the underlying production implementation is proprietary, this repository deliberately uses **synthetic scenarios and reconstructed patterns** to demonstrate the underlying engineering concepts publicly.

---

# What This Repository Demonstrates

## 1. Prompt Architecture

Prompts are treated as structured system components rather than simple blocks of instructions.

Examples explore:

- System and role instructions
- Instruction hierarchy
- Context boundaries
- Delimiters
- Explicit constraints
- Output requirements
- Failure behaviour
- Reusable prompt components

The objective is to make prompts easier to reason about, test, version, and maintain.

---

## 2. Structured Outputs

LLMs are often integrated into software systems where their output must be consumed programmatically.

Examples therefore explore structured responses such as:

```json
{
  "intent": "billing_issue",
  "confidence": 0.91,
  "requires_human": false
}
```

The focus is on making model outputs:

* Predictable
* Machine-readable
* Validatable
* Easy to route through application logic

---

## 3. Intent Classification

A conversational system often needs to determine **what a user is trying to accomplish before deciding what should happen next**.

The classification experiment demonstrates:

* Intent definitions
* Classification instructions
* Confidence handling
* Structured JSON output
* Human escalation
* Unknown/ambiguous intent handling

→ [View prompt](prompts/classification/support-intent.md)

---

## 4. Conversational Response Generation

Response generation is separated from classification and routing so that the system can apply different rules depending on the conversation context.

The example explores:

* Context-aware responses
* Tone and communication constraints
* Guardrails
* Unsupported-request handling
* Escalation to human agents
* Maintaining conversational context

→ [View prompt](prompts/response-generation/support-response.md)

---

## 5. Guardrails & Fallback Behaviour

A production conversational system cannot assume that every input should receive an AI-generated answer.

The examples demonstrate approaches for handling:

* Unknown intents
* Low-confidence classifications
* Missing information
* Unsupported requests
* Sensitive scenarios
* Conflicting instructions
* Situations requiring human intervention

The principle is simple:

> **When the system cannot respond reliably, it should fail safely rather than confidently invent an answer.**

---

## 6. Prompt Evaluation

Prompt quality should be evaluated against defined criteria rather than subjective impressions alone.

The evaluation examples use synthetic test cases to compare prompt versions against criteria such as:

* Instruction adherence
* Output validity
* Classification accuracy
* Response relevance
* Guardrail compliance
* Escalation behaviour

→ [View evaluation](evaluations/prompt-comparison.md)

---

## 7. Versioning & A/B Testing

Prompt changes can affect behaviour, latency, token consumption, and reliability.

This lab therefore treats prompts as versioned artefacts that can be compared systematically.

A typical experiment can track:

```text
Prompt Version
      ↓
Test Dataset
      ↓
Model Evaluation
      ↓
Output Comparison
      ↓
Metrics
      ↓
Decision
```

The goal is to make prompt iteration closer to an engineering process than ad-hoc experimentation.

---

## 8. Token & Latency Awareness

Prompt engineering is also an optimisation problem.

The repository explores the relationship between:

* Prompt length
* Context size
* Instruction complexity
* Output length
* Token consumption
* Model configuration
* Response latency

The objective is not simply to create the longest or most detailed prompt, but to provide the **minimum reliable context and instruction necessary for the desired behaviour**.

---

# Architecture

The conceptual architecture used throughout the examples is intentionally simple:

```text
                    ┌──────────────────┐
                    │   User Message   │
                    └────────┬─────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │  Context Assembly   │
                  │                     │
                  │ • Conversation      │
                  │ • Metadata          │
                  │ • Business Context  │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │  Prompt / Workflow  │
                  │      Selection      │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │        LLM          │
                  │                     │
                  │ Classification /    │
                  │ Generation /        │
                  │ Extraction          │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Output Validation   │
                  │                     │
                  │ • Schema            │
                  │ • Confidence        │
                  │ • Guardrails        │
                  └──────────┬──────────┘
                             │
                  ┌──────────┴──────────┐
                  ▼                     ▼
        ┌──────────────────┐   ┌──────────────────┐
        │ Application      │   │ Human Escalation │
        │ Workflow         │   │ / Review         │
        └──────────────────┘   └──────────────────┘
```

This architecture reflects an important principle:

**The LLM should be treated as one component within a larger application workflow, not as the entire application.**

For a more detailed explanation, see:

→ [Architecture](docs/architecture.md)

---

# Repository Structure

```text
conversational-ai-prompt-lab/
│
├── README.md
│
├── docs/
│   └── architecture.md
│
├── prompts/
│   ├── classification/
│   │   └── support-intent.md
│   │
│   └── response-generation/
│       └── support-response.md
│
├── evaluations/
│   └── prompt-comparison.md
│
├── examples/
│   └── ...
│
└── scripts/
    └── ...
```

### `prompts/`

Prompt implementations and experiments organised by conversational capability.

### `evaluations/`

Synthetic evaluation datasets, criteria, prompt comparisons, and experiment results.

### `examples/`

Focused demonstrations of individual prompt-engineering techniques.

### `scripts/`

Small utilities for running experiments, comparing outputs, or processing evaluation data.

### `docs/`

Architecture decisions, workflow explanations, and supporting technical documentation.

---

# Featured Experiments

### 1. Support Intent Classification

Classifies incoming customer messages into predefined intents and determines whether human intervention is required.

**Demonstrates:** classification, structured outputs, confidence handling, routing, and escalation.

→ [View prompt](prompts/classification/support-intent.md)

---

### 2. Context-Aware Support Response

Generates customer-support responses while respecting conversational context, response constraints, and escalation rules.

**Demonstrates:** response generation, context management, guardrails, and fallback behaviour.

→ [View prompt](prompts/response-generation/support-response.md)

---

### 3. Prompt Evaluation & Comparison

Compares prompt versions against a synthetic evaluation set rather than relying solely on subjective inspection.

**Demonstrates:** evaluation criteria, prompt versioning, regression testing, and measurable iteration.

→ [View evaluation](evaluations/prompt-comparison.md)

---

# Engineering Principles

I generally optimise for:

1. **Clear instruction hierarchy**
   Prompts should make priorities and constraints explicit.

2. **Structured outputs**
   Model responses should be predictable and easy for application code to validate.

3. **Explicit failure behaviour**
   The system should define what happens when the model is uncertain or encounters unsupported input.

4. **Minimal unnecessary context**
   More context is not automatically better; unnecessary context can increase cost, latency, and ambiguity.

5. **Human escalation when appropriate**
   AI should know when it should defer to a human rather than attempting to handle every situation.

6. **Measurable evaluation**
   Prompt changes should be evaluated against defined criteria and representative test cases.

7. **Versioned experimentation**
   Prompts should be treated as evolving engineering artefacts that can be compared and reviewed.

8. **Production awareness**
   Reliability, latency, cost, maintainability, observability, and user experience matter alongside model quality.

---

# What This Lab Does Not Claim

This repository is intentionally **not presented as a production voice-AI, debt-collections, or NLP research platform**.

It is a public engineering portfolio demonstrating practical thinking around LLM-powered application workflows.

It does not claim production experience with technologies or domains that are not represented in my actual professional work.

Where examples simulate production scenarios, they are clearly marked as synthetic or reconstructed.

---

# Disclaimer

All examples are synthetic or reconstructed demonstrations.

No proprietary prompts, customer data, credentials, internal workflows, private source code, or confidential ChatSasa implementation details are included.

The repository is intended solely as a public demonstration of prompt-engineering and conversational-AI engineering concepts.
