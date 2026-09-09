# Playwright Quality Engineering Framework

[![Playwright Quality Gate](https://github.com/javicale/playwright-quality-engineering/actions/workflows/playwright.yml/badge.svg)](https://github.com/javicale/playwright-quality-engineering/actions/workflows/playwright.yml)

A production-minded **Playwright + TypeScript** reference project for Quality Engineering portfolios and real-world automation design.

This repository demonstrates how I structure automated validation around **maintainability, observability, evidence and CI feedback**, rather than treating automation as a collection of isolated scripts.

## What this demonstrates

- UI end-to-end automation with **Page Object Model**
- API validation with Playwright request context
- Cross-browser execution: Chromium, Firefox and WebKit
- Environment-aware configuration
- Trace, screenshot and video evidence on failure
- HTML and JUnit reporting
- Retry strategy appropriate for CI
- GitHub Actions quality gate
- Separation of UI, API and reusable page abstractions
- Test metadata and annotations for readable evidence

## Project structure

```text
.
├── .github/workflows/
│   └── playwright.yml
├── pages/
│   └── PlaywrightHomePage.ts
├── tests/
│   ├── api/
│   │   └── health.spec.ts
│   └── ui/
│       └── home.spec.ts
├── docs/
│   ├── TEST-STRATEGY.md
│   └── EVIDENCE.md
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Local execution

```bash
npm install
npx playwright install --with-deps
npm test
```

Useful commands:

```bash
npm run test:ui
npm run test:api
npm run test:headed
npm run report
```

## Quality strategy

The framework uses a layered model:

```text
Business risk
    ↓
Test intent
    ↓
Automated execution
    ↓
Artifacts / traces / reports
    ↓
Failure diagnosis
    ↓
Release evidence
```

See [`docs/TEST-STRATEGY.md`](docs/TEST-STRATEGY.md) for the rationale behind the test design and [`docs/EVIDENCE.md`](docs/EVIDENCE.md) for the evidence standard.

## CI evidence

The workflow executes the test suite on every push and pull request to `main`, then uploads the Playwright HTML report and raw test results even when tests fail. A failed pipeline should therefore still produce diagnostic evidence.

## Why Playwright

Playwright provides browser automation across Chromium, Firefox and WebKit with a unified API, built-in tracing, assertions and test-runner capabilities. This repository currently targets **@playwright/test 1.63.0**.

## Portfolio scope

This is intentionally a compact reference implementation. The goal is to demonstrate **engineering decisions and structure**, not inflate test counts.

Planned extensions:

- authenticated-state fixtures;
- contract and schema validation;
- accessibility checks;
- visual regression examples;
- Docker execution;
- test telemetry / observability export;
- AI-assisted test generation with human-reviewed evidence.

---

**Author:** Javier Capa — Senior Quality Software Engineer
