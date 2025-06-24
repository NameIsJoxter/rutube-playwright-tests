import { test, expect } from '../../fixtures/fixtures';
import { CategoriesPage } from '../../pages/CategoriesPage';

test('Проверка лейаута', async ({ categoriesPage }) => {
  await categoriesPage.hideHeader();
  await categoriesPage.contentPageHasCorrectContentLayout();
});
