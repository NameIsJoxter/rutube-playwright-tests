import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категорий', async ({ mainPage }) => {
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopUpList();
  await mainPage.addPopUpListHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationPopUp();
  await mainPage.notificationPopUpHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
  await mainPage.openAvtorizationModal();
  await mainPage.autorizationModelHasCorrectAreaSnapshot();
});
