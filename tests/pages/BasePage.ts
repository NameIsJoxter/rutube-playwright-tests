import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  protected async checkAreaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({ name: ariaName });
  }
  async clozeCookieAlert() {
    await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
    await expect
      .soft(this.page.getByLabel('Уведомление об использовании cookies').locator('div').first())
      .toBeHidden();
  }
  async clozeBanner() {
    if (await this.page.locator('.wdp-popup-module__popup').isVisible()) {
      await this.page.getByRole('button', { name: 'Закрыть' }).click();
      await expect.soft(this.page.locator('.wdp-popup-module__popup')).toBeHidden();
    }
  }
  protected async checkLayoutByScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toHaveScreenshot(screenshotName, {
      animations: 'disabled',
      maxDiffPixels: 800,
    });
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const elem = document.querySelector(selector);
      if (elem) {
        (elem as HTMLElement).style.display = 'none';
      }
    }, selector);
  }
}
