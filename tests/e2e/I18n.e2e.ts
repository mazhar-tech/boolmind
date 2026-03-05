import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test('should switch language from English to French and verify text', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', { name: 'Welcome' }),
    ).toBeVisible();

    await page.getByLabel('lang-switcher').selectOption('fr');

    await expect(
      page.getByRole('heading', { name: 'Bienvenue' }),
    ).toBeVisible();
  });

  test('should show French content when visiting /fr', async ({ page }) => {
    await page.goto('/fr');

    await expect(
      page.getByRole('heading', { name: 'Bienvenue' }),
    ).toBeVisible();
  });
});
