import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: false,
    setupNodeEvents(on, config) {
      // Add node event listeners here when needed
    },
  },
})
