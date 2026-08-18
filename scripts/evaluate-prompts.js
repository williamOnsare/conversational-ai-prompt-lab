/**
 * Lightweight prompt evaluation harness.
 *
 * This script demonstrates the structure of a repeatable prompt
 * evaluation workflow using synthetic test cases.
 *
 * No proprietary prompts, customer data, credentials, or production
 * business logic are included.
 */

const testCases = [
  {
    id: "TC-001",
    input: "I was charged twice for the same transaction.",
    expectedIntent: "billing_issue",
  },
  {
    id: "TC-002",
    input: "I forgot my password and cannot log in.",
    expectedIntent: "account_access",
  },
  {
    id: "TC-003",
    input: "I want to speak to a human agent.",
    expectedIntent: "human_support",
  },
];

const results = testCases.map((testCase) => ({
  id: testCase.id,
  expectedIntent: testCase.expectedIntent,
  status: "pending",
}));

console.table(results);

console.log(
  "\nEvaluation harness initialised. " +
    "Connect a model adapter to execute live prompt evaluations.",
);
