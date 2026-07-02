import{test,expect} from '@playwright/test';

test.describe('Home Page Tests', () => {
  test('Verify the home page title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

  })
});