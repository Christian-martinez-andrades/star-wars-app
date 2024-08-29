import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'cypress/fixtures',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:4200',
  },
});
