# Cypress Training

Shared automation training repo for the QA team. Built with Cypress and TypeScript.

## Setup

You need [Node.js LTS](https://nodejs.org/) and [Git](https://git-scm.com/) installed before you start.

```bash
git clone <REPO-URL-GOES-HERE>
cd cypressTraining
npm install
```

## Running tests

**Interactive mode** (use this when writing and debugging tests):

```bash
npm run cy:open
```

This opens the Cypress App. Click **E2E Testing**, choose a browser, then click a spec file to run it.

**Headless mode** (use this to simulate CI, or run all tests at once):

```bash
npm run cy:run
```

## Project structure

```
cypress/
  e2e/          ← test files (*.cy.ts)
  fixtures/     ← test data (JSON files)
  pages/        ← Page Objects (add these from week 7 onward)
  support/
    commands.ts ← custom cy.* commands
    e2e.ts      ← runs before every test file
cypress.config.ts
tsconfig.json
package.json
```

## The practice site

Tests in this repo target [automationexercise.com](https://automationexercise.com) during training. The 26 pre-defined test cases at [automationexercise.com/test_cases](https://automationexercise.com/test_cases) are a good source of ideas for personal practice.

## Week 4 exercise

Add your name and GitHub username to `team.md` and push the change. This is your first commit to a shared repo.
