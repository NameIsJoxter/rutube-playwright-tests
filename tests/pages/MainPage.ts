import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('.header-module__mainHeader');
    this.categoriesTabLocator = this.page.locator(
      '.freyja_pen-tabs-snipped-list__snipped-list_IgInW',
    );
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLocator).toMatchAriaSnapshot();
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
  async clozeCookieAlert() {
    await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
  }
  async clozeAdvertisingBanner() {
    await this.page.getByRole('button', { name: 'Закрыть' }).click();
  }
}
