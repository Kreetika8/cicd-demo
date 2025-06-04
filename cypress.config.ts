import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

dotenv.config()  // Load .env variables

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      ...process.env,
    },
    setupNodeEvents(on, config) {
      return config
    },
  },
})
