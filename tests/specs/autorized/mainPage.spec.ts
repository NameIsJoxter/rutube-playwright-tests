import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationPopUp();
  await mainPage.notificationPopUpHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAreaSnapshot();
});
