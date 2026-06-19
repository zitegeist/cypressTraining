// This file runs before every test file.
// Import custom commands so they are available everywhere.
import './commands'

// Global beforeEach — runs before every test in every file.
// Use sparingly. Put test-specific setup inside the test file.
beforeEach(() => {
  // Example: cy.clearCookies() or cy.clearLocalStorage() for test isolation
})
