# Evaluation Scripts

This directory contains lightweight utilities used to support prompt
experiments and evaluation workflows in the repository.

The scripts are intentionally small and focused on demonstrating the
evaluation methodology rather than providing a production-grade LLM
evaluation framework.

## Current Scripts

### `evaluate-prompts.js`

Runs a lightweight comparison workflow against synthetic test cases.

The script is designed to demonstrate how prompt versions can be evaluated
against a consistent test set rather than relying solely on manual inspection.

## Design Goals

The evaluation utilities aim to support:

- Repeatable experiments
- Prompt-version comparison
- Structured evaluation results
- Clear separation between test data and evaluation logic
- Easy extension as additional experiments are added

## Important Note

The repository does not include proprietary API credentials, customer data,
production prompts, or confidential application logic.

Any model/API integration should use environment variables for credentials and synthetic test data only.