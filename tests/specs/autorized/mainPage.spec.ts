import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера авторизованному пользователю', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений авторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopUp();
  await mainPage.notificationPopUpHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов раскрытого меню вторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов меню пользователя в хедере', async ({ mainPage }) => {
  await mainPage.openHeaderUserMenu();
  await mainPage.headerUserMenuHasCorrectAreaSnapshot();
});
