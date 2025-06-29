import { defineConfig } from 'cypress'
// const { defineConfig } = require('cypress');

import * as dotenv from 'dotenv'

dotenv.config()  // Load .env variables

module.exports = defineConfig({
    reporter: 'reporters/custom.js',
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     charts: true, //chart banauxa at the side of test case
//     reportPageTitle: '1st Test',   //title change garxa page ko
//     embeddedScreenshots: true, //images chai directly html ma haalxa
//     inlineAssets: true,   //asstes file lai html ma merge garxa
//     saveAllAttempts: true,
//   },
  e2e: {
 baseUrl: process.env.BASE_URL,
   screenshotOnRunFailure: true,
    video: true,
//     retries:{
//       runMode: 2,
//       openMode: 2  
//     },

    env: {
      ...process.env,
    },

//     setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//       // Add plugin code or event listeners if needed
//       return config
//     },
  },
})
