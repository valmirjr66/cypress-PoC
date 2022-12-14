const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    codeCoverage: {
      exclude: [
        'cypress/**/*.*',
        'src/serviceWorker.js'
      ],
    },
    cssVars: {
      '--cor-secundaria': 'rgb(77, 142, 195)',
      '--cor-vermelho-claro': 'rgb(249, 44, 44)',
      '--cor-verde': 'rgb(75, 181, 67)'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  }
});
