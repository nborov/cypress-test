const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'di7z4f',
  e2e: {
    "baseUrl": "http://localhost:8081",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
