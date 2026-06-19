// ESLint flat config — catches mistakes before you run the test.
// Runs with: npm run lint   (auto-fix many issues with: npm run lint:fix)
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import cypress from 'eslint-plugin-cypress'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  // Don't lint generated / vendored folders.
  {
    ignores: ['node_modules/', 'cypress/screenshots/', 'cypress/videos/', 'cypress/downloads/'],
  },

  // Base JS + TypeScript recommended rules.
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Cypress-aware rules: flags common test mistakes like assigning the return
  // of a cy.* command to a variable, or unsafe use of .then().
  cypress.configs.recommended,

  // Training-friendly tweaks — relax a couple of rules that would otherwise
  // nag beginners without teaching much.
  {
    files: ['cypress/**/*.ts', 'cypress.config.ts'],
    rules: {
      // The empty setupNodeEvents / beforeEach stubs in this repo are intentional.
      'no-empty': ['error', { allowEmptyCatch: true }],
      // setupNodeEvents(on, config) keeps both params for discoverability even when unused.
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', varsIgnorePattern: '^_' }],
    },
  },

  // Typing a custom cy.* command REQUIRES augmenting the Cypress namespace —
  // this is the documented pattern, so the no-namespace rule doesn't apply here.
  {
    files: ['cypress/support/**/*.ts'],
    rules: {
      '@typescript-eslint/no-namespace': 'off',
    },
  },

  // Must be LAST: turns off formatting rules that Prettier owns, so the two tools
  // don't fight each other.
  prettier
)
