# Conversational AI Architecture

## Overview

This document describes the architecture of the conversational AI patterns
demonstrated in this repository.

The repository is a public portfolio project containing synthetic and
reconstructed examples inspired by real-world experience integrating
LLM capabilities into customer-support workflows.

It is **not** a representation of any proprietary production system.

The architecture demonstrates how an LLM can be integrated into a broader
application while maintaining:

- predictable behaviour
- structured outputs
- clear business rules
- human oversight
- measurable evaluation
- safe failure behaviour
- cost and latency awareness
- versioned prompt management

---

# 1. Architectural Goals

The system is designed around several principles.

### 1.1 AI should be one component, not the whole application

Business-critical decisions should not depend entirely on a free-form model
response.

The application should control:

- authentication
- business rules
- permissions
- workflow state
- API calls
- persistence
- validation
- escalation

The LLM should perform tasks where language understanding or generation
provides a meaningful advantage.

---

### 1.2 Separate deterministic logic from probabilistic logic

Deterministic application logic should remain outside the model whenever
possible.

For example:

```text
Application Logic
    ├── user authentication
    ├── permissions
    ├── transaction state
    ├── available actions
    ├── escalation policy
    └── business rules

LLM Responsibilities
    ├── intent classification
    ├── language understanding
    ├── response drafting
    └── conversational transformation