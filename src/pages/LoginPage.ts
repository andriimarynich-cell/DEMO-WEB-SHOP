import { Page, Locator, expect } from '@playwright/test';
import BasePage  from './BasePage';

export class LoginPage extends BasePage {
  readonly loginLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutLink: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
    this.errorMessage = page.locator('.validation-summary-errors li');
  }

  async open() {
    await this.navigate('/');
    await this.click(this.loginLink);
  }

 async login(email?: string, password?: string) {
  if (!email || !password) {
    throw new Error(
      'USER_EMAIL or USER_PASSWORD is not defined. Check your .env file.'
    );
  }

  await this.fill(this.emailInput, email);
  await this.fill(this.passwordInput, password);
  await this.click(this.loginButton);
}

  async verifyLoginSuccess() {
    await expect(this.logoutLink).toBeVisible();
  }

  async verifyLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }
}
