import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url: 'http://localhost:5173/'
  },
  viewportHeight: 1080,
  viewportWidth: 1920

});
