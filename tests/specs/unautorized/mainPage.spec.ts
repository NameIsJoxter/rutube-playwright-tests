import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера неавторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности табов категорий неавторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню неавторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента неавторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.openAddPopUpList();
  await mainPage.addPopUpListHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений неавторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopUp();
  await mainPage.notificationPopUpHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации неавторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.openAvtorizationModal();
  await mainPage.autorizationModelHasCorrectAreaSnapshot();
});

test('Проверка доступности элементов раскрытого меню неавторизованному пользователю', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAreaSnapshot();
});

test('Переключение темы у  неавторизованного пользователя', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToLight();
  await mainPage.checkThemeAttributeValue('white2022');
  await mainPage.changeThemeToDark();
  await mainPage.checkThemeAttributeValue('dark2021');
});
