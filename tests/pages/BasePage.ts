import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  protected async checkAreaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({ name: ariaName });
  }
}
