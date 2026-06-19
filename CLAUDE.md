# CLAUDE.md — Cypress Training

Guidance for Claude (and any AI assistant) working in this repo.

## What this repo is

A **shared QA automation training repo** used to teach the QA team how to write Cypress
end-to-end tests in TypeScript. Tests run against the public practice site
[automationexercise.com](https://automationexercise.com) (set as `baseUrl` in
`cypress.config.ts`). The 26 published test cases at `/test_cases` are the source of
practice exercises.

This is a **learning environment, not production code.** Optimise for clarity over cleverness.

## How to help here (teaching philosophy)

- **Explain, don't just solve.** When someone is doing an exercise, prefer showing the
  approach and the _why_ over pasting a finished spec. If asked directly for a solution,
  give it — but keep it readable and explain each step.
- **Favour simple, obvious Cypress.** Beginners read this code. Avoid advanced patterns
  (custom plugins, heavy abstraction) unless the exercise is specifically about them.
- **Don't pre-build later weeks.** The README references a Page Object folder
  (`cypress/pages/`) introduced "from week 7 onward" — don't add structure ahead of where
  the curriculum is unless asked.

## Conventions

- **Specs** live in `cypress/e2e/` and are named `*.cy.ts`.
- **Selectors:** prefer the site's `data-qa` attributes (e.g. `cy.get('[data-qa="login-email"]')`)
  over brittle CSS/text selectors. This mirrors `data-testid` best practice.
- **Test data** goes in `cypress/fixtures/*.json`, loaded with `cy.fixture(...)`. Never
  hard-code credentials in a spec.
- **Custom commands** are defined in `cypress/support/commands.ts`. To make TypeScript
  recognise a new `cy.*` command you must augment the Cypress namespace — and the file
  needs a top-level `export {}` so it counts as a module:

  ```ts
  Cypress.Commands.add('login', (email: string, password: string) => {
    /* ... */
  })

  export {} // makes this file a module so `declare global` is allowed
  declare global {
    namespace Cypress {
      interface Chainable {
        login(email: string, password: string): Chainable<void>
      }
    }
  }
  ```

- **`cypress/support/e2e.ts`** runs before every spec file. Keep global hooks minimal.

## Commands

```bash
npm run cy:open      # interactive Cypress App — use while writing/debugging
npm run cy:run       # headless run of all specs (what CI does)
npm run typecheck    # tsc --noEmit — catch type errors without running tests
npm run lint         # eslint (lint:fix to auto-fix)
npm run format       # prettier --write (format:check to verify only)
```

Before considering a change done, make sure **`npm run typecheck`, `npm run lint`, and
`npm run format:check` all pass** — these are the quality gates.

## Secrets

Never commit credentials. `cypress.env.json`, `.env`, and `.env.*` are gitignored. Real
login details for the practice site go in a local `cypress.env.json` and are read via
`Cypress.env(...)`.
