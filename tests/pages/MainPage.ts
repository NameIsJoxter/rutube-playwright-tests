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
  private readonly menuBurgerLocator: Locator;
  private readonly openMenuAreaLocator: Locator;
  private readonly changeThemeToLightButton: Locator;
  private readonly changeThemeToDarkButton: Locator;

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
      '.wdp-notifications-popup-module__wrapper',
    );
    this.autorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.menuBurgerLocator = this.page.getByLabel('Открыть меню навигации');
    this.openMenuAreaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeToDarkButton = this.page.getByLabel('Переключить на тёмную тему');
    this.changeThemeToLightButton = this.page.getByLabel('Переключить на светлую тему');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.aria.yml' });
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLocator).toMatchAriaSnapshot({
      name: 'categoriesAriaSnapshot.yml',
    });
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapshot.aria.yml' });
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
      name: 'AddButtonPopUpListAriaSnapshot.aria.yml',
    });
  }
  async notificationPopUpHasCorrectAreaSnapshot() {
    await expect(this.headerNotificationPopUpLocator).toMatchAriaSnapshot({
      name: 'NotificationPopUpAriaSnapshot.aria.yml',
    });
  }
  async autorizationModelHasCorrectAreaSnapshot() {
    await expect(this.autorizationModalLocator).toMatchAriaSnapshot({
      name: 'autorizationModalAriaSnapshot.aria.yml',
    });
  }
  async openFullMenu() {
    await this.menuBurgerLocator.click();
  }
  async fullMenuHasCorrectAreaSnapshot() {
    await expect(this.openMenuAreaLocator).toMatchAriaSnapshot({
      name: 'fullMenuAriaSnapshot.aria.yml',
    });
  }
  async changeThemeToLight() {
    await this.changeThemeToLightButton.click();
  }
  async changeThemeToDark() {
    await this.changeThemeToDarkButton.click();
  }
  async checkThemeAttributeValue(attributeValue: white2022 | dark2021) {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
