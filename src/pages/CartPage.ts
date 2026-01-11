import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export class CartPage extends BasePage {
  readonly cartRows: Locator;
  readonly unitPrices: Locator;
  readonly totalPrice: Locator;
  readonly termsCheckbox: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);

    this.cartRows = page.locator('.cart-item-row');
    this.unitPrices = page.locator('.product-unit-price');
    this.totalPrice = page.locator('.cart-total-right .value-summary strong');
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');
  }

  async open() {
  await this.navigate('/cart');
  await this.page.waitForLoadState('domcontentloaded');
}


  async isEmpty(): Promise<boolean> {
    return (await this.cartRows.count()) === 0;
  }

  /**
   * ✅ Перевірка НЕ залежить від кількості товарів
   * - якщо є total → перевіряємо його
   * - інакше перевіряємо unit price
   */
  async verifyCartHasItemsAndPrice() {
    await expect(this.cartRows.first()).toBeVisible();

    if (await this.totalPrice.count() > 0) {
      const totalText = await this.totalPrice.innerText();
      const total = Number(totalText.replace('$', '').trim());
      expect(total).toBeGreaterThan(0);
    } else {
      const unitText = await this.unitPrices.first().innerText();
      const unit = Number(unitText.replace('$', '').trim());
      expect(unit).toBeGreaterThan(0);
    }
  }

  async agreeWithTerms() {
    await this.termsCheckbox.check();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
