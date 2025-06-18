import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopUpListLocator: Locator;
  private readonly headerNotificationPopUpLocator: Locator;
  private readonly autorizationModalLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('.header-module__mainHeader');
    this.categoriesTabLocator = this.page.locator(
      '.freyja_pen-tabs-snipped-list__tabs--no-scroll_tevul',
    );
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopUpListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationPopUpLocator = this.page.locator(
      'wdp-notifications-popup-module__wrapper',
    );
    this.autorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLocator).toMatchAriaSnapshot({
      name: 'categoriesAriaSnapshot.yml',
    });
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapshot.yml' });
  }
  async clozeCookieAlert() {
    await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
    await expect.soft(this.page.getByLabel('Уведомление об использовании cookies')).toBeHidden();
  }
  async clozeBanner() {
    if (await this.page.locator('.wdp-popup-module__popup').isVisible()) {
      await this.page.getByRole('button', { name: 'Закрыть' }).click();
      await expect.soft(this.page.getByRole('button', { name: 'Закрыть' })).toBeHidden();
    }
  }
  async openAddPopUpList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationPopUp() {
    await this.headerNotificationButtonLocator.click();
  }
  async openAvtorizationModal() {
    await this.headerLoginButtonLocator.click();
  }
  async addPopUpListHasCorrectAreaSnapshot() {
    await expect(this.headerAddButtonPopUpListLocator).toMatchAriaSnapshot({
      name: 'AddButtonPopUpListAriaSnapshot.yml',
    });
  }
  async notificationPopUpHasCorrectAreaSnapshot() {
    await expect(this.headerNotificationPopUpLocator).toMatchAriaSnapshot({
      name: 'NotificationPopUpAriaSnapshot.yml',
    });
  }
  async autorizationModelHasCorrectAreaSnapshot() {
    await expect(this.autorizationModalLocator).toMatchAriaSnapshot({
      name: 'autorizationModalAriaSnapshot.yml',
    });
  }
}
