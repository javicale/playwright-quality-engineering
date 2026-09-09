import { test } from '@playwright/test';
import { PlaywrightHomePage } from '../../pages/PlaywrightHomePage';

test.describe('Playwright documentation smoke validation', () => {
  test('home page exposes the primary getting-started path', async ({ page }) => {
    test.info().annotations.push({
      type: 'risk',
      description: 'Primary documentation entry point must remain reachable and actionable.',
    });

    const home = new PlaywrightHomePage(page);

    await test.step('Open the public application entry point', async () => {
      await home.goto();
    });

    await test.step('Verify the page loaded and the main CTA is available', async () => {
      await home.assertLoaded();
    });
  });
});
