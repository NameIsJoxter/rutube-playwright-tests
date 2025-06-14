import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Открытие главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.clozeCookieAlert();
  await mainPage.clozeAdvertisingBanner();
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.clozeCookieAlert();
  await mainPage.clozeAdvertisingBanner();
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.clozeCookieAlert();
  await mainPage.clozeAdvertisingBanner();
  await mainPage.menuHasCorrectAriaSnapshot();
});
