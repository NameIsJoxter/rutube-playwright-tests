import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SubscriptionsPage extends BasePage {
  private readonly contentPageLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
  }

  async open() {
    await this.page.goto('https://rutube.ru/my/subscriptions/');
  }

  async contentHasCorrectAreaSnapshot() {
    await this.checkAreaSnapshot(
      this.contentPageLocator,
      'this.contentPageLocator.ariaSnapshot.yml',
    );
  }
}
