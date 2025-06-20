import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('test', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru/');
  await page.getByRole('button', { name: 'Закрыть' }).click();
  if (await page.locator('.wdp-popup-module__popup').isVisible()) {
    await page.getByRole('button', { name: 'Закрыть' }).click();
    await expect.soft(page.getByRole('button', { name: 'Закрыть' })).toBeHidden();
  }
  await page
    .locator('div')
    .filter({ hasText: /^Вход и регистрация$/ })
    .locator('button')
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .fill(process.env.LOGIN!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').click({
    button: 'right',
  });
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page.getByAltText('Иконка канала channel65715462').click();
  await page.locator('a').filter({ hasText: 'Профиль' }).click();

  await page.context().storageState({ path: authFile });
});
