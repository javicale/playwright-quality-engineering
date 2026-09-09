import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: /get started/i }).first();
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async assertLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Playwright/i);
    await expect(this.getStartedLink).toBeVisible();
  }
}
