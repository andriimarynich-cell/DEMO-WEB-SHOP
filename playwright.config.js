require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  timeout: 60 * 1000,
  retries: 0,

  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: process.env.BASE_URL || 'https://demowebshop.tricentis.com',
    headless: false, // true для CI
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry', // <-- Виправлено
  },
});
