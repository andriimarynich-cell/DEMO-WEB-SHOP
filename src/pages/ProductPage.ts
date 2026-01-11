import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export class ProductPage extends BasePage {
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);

    // 🔒 ТІЛЬКИ кнопка на product details page
    this.addToCartButton = page.locator(
      '#product-details-form input[id^="add-to-cart-button"]'
    );
  }

  async openProduct(productUrl: string) {
    await this.page.goto(productUrl, { waitUntil: 'domcontentloaded' });

    // гарантія що це саме product page
    await expect(this.addToCartButton).toHaveCount(1);
    await expect(this.addToCartButton).toBeVisible();
  }

  async addToCart() {
    await this.addToCartButton.click();

    // чекаємо ajax-notification
    await this.page.locator('#bar-notification').waitFor({ state: 'visible' });
    await this.page.locator('#bar-notification').waitFor({ state: 'hidden' });
  }
}
