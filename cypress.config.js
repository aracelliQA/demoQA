const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://demoqa.com/",
    testIsolation: true,
    cacheAcrossSpecs: true
  
  },
}
  
);
