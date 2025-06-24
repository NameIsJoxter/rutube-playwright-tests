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
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

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
    this.userLogoLocator = this.page.getByAltText('Иконка канала channel65715462');
    this.headerUserMenuLocator = this.page.getByText(
      'channel65715462+7 *** ***-15-14Завершите регистрациюПрофильМой каналСтудия',
    );
  }

  //actions
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async openHeaderUserMenu() {
    await this.page.getByAltText('Иконка канала channel65715462').click();
  }
  async openAddPopUpList() {
    await this.userLogoLocator.click();
  }
  async openNotificationPopUp() {
    await this.headerNotificationButtonLocator.click();
  }
  async openAvtorizationModal() {
    await this.headerLoginButtonLocator.click();
  }
  async openFullMenu() {
    await this.menuBurgerLocator.click();
  }
  async changeThemeToLight() {
    await this.changeThemeToLightButton.click();
  }
  async changeThemeToDark() {
    await this.changeThemeToDarkButton.click();
  }

  //assertions

  async fullMenuHasCorrectAreaSnapshot() {
    await this.checkAreaSnapshot(this.openMenuAreaLocator, 'fullMenu.aria.yml');
  }
  async autorizationModelHasCorrectAreaSnapshot() {
    await this.checkAreaSnapshot(this.autorizationModalLocator, 'autorizationModal.aria.yml');
  }

  async notificationPopUpHasCorrectAreaSnapshot() {
    await this.checkAreaSnapshot(this.headerNotificationPopUpLocator, 'NotificationPopUp.aria.yml');
  }
  async addPopUpListHasCorrectAreaSnapshot() {
    await this.checkAreaSnapshot(
      this.headerAddButtonPopUpListLocator,
      'AddButtonPopUpList.aria.yml',
    );
  }
  async menuHasCorrectAriaSnapshot() {
    await this.checkAreaSnapshot(this.menuLocator, 'menu.aria.yml');
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await this.checkAreaSnapshot(this.categoriesTabLocator, 'categories.aria.yml');
  }
  async headerHasCorrectAriaSnapshot() {
    await this.checkAreaSnapshot(this.headerLocator, 'header.aria.yml');
  }
  async headerUserMenuHasCorrectAreaSnapshot() {
    await this.checkAreaSnapshot(this.headerUserMenuLocator, 'headerUserMenu.aria.yml');
  }
  async checkThemeAttributeValue(attributeValue: 'white2022' | 'dark2021') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
