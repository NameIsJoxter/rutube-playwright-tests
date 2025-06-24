import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ForCreatorsPage extends BasePage {
  static readonly testParams = [
    {
      name: 'Главная',
      url: 'https://rutube.ru/for_creators/#main',
      screenshotName: 'main.png',
    },
    {
      name: 'Первые шаги',
      url: 'https://rutube.ru/for_creators/#steps',
      screenshotName: 'steps.png',
    },
    {
      name: 'Как развивать канал',
      url: 'https://rutube.ru/for_creators/#faq',
      screenshotName: 'faq.png',
    },
    {
      name: 'Монетизация',
      url: 'https://rutube.ru/for_creators/#monetization',
      screenshotName: 'monetization.png',
    },
    {
      name: 'Правила',
      url: 'https://rutube.ru/for_creators/#rules',
      screenshotName: 'rules.png',
    },
    {
      name: 'Команда R',
      url: 'https://rutube.ru/for_creators/#team',
      screenshotName: 'team.png',
    },
  ];

  private readonly pageContentLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.pageContentLocator = this.page.locator('#___gatsby');
  }
  async open(url: string) {
    await this.page.goto(url);
  }
  async pageHasCorrectLayout(screenshotName: string) {
    await this.checkLayoutByScreenshot(this.pageContentLocator, screenshotName);
  }
}
