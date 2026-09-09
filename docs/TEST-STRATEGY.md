# Test Strategy

## Purpose

This reference project demonstrates a Quality Engineering approach in which automation is selected and designed according to **risk, feedback speed, maintainability and evidence quality**.

## Quality risks covered

| Risk | Validation | Layer | Evidence |
|---|---|---|---|
| Primary web entry point is unavailable or unusable | Smoke UI validation | UI / E2E | HTML report, screenshot, trace/video on failure |
| Public API resource changes status or payload contract | Contract-style API assertion | API | JUnit + HTML report |
| Browser-specific regression | Same UI intent across Chromium, Firefox and WebKit | Cross-browser | Per-project Playwright results |
| Failure cannot be diagnosed quickly | Capture artifacts only when useful | Observability | trace, screenshot, retained video |
| CI failure has no reviewable evidence | Always upload reports/results | Pipeline | GitHub Actions artifacts |

## Test design principles

1. **Risk before scripts** — every automated test should map to a failure mode worth detecting.
2. **Stable locators** — prefer user-facing roles and accessible names over CSS implementation details.
3. **Layered validation** — validate APIs directly when browser rendering is not required.
4. **Deterministic assertions** — avoid arbitrary sleeps and weak assertions.
5. **Useful retries** — retries exist in CI for diagnostic resilience, not to normalize flaky tests.
6. **Evidence by default** — a failed validation should leave enough context to investigate.
7. **Small abstractions** — Page Objects remove duplication without hiding test intent.

## Scope

### In scope

- public smoke UI path;
- simple public API contract validation;
- browser compatibility example;
- CI quality gate;
- evidence collection.

### Out of scope

- authentication and secrets;
- destructive test data;
- load/performance testing;
- production monitoring;
- security testing;
- accessibility and visual baselines (planned extensions).

## Release interpretation

A green run means the **specific automated risks represented by this suite were not observed**. It does not mean the product is defect-free.

That distinction is fundamental to risk-based Quality Engineering.
