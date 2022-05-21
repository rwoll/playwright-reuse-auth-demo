import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalSetup: './globalSetup.ts',
  use: {
    storageState: './auth.json'
  },
};

export default config;
