import { Page, Locator, expect } from '@playwright/test';
import BasePage  from './BasePage';

export class CheckoutPage extends BasePage {
  readonly billingContinue: Locator;
  readonly shippingContinue: Locator;
  readonly paymentMethodContinue: Locator;
  readonly paymentInfoContinue: Locator;
  readonly confirmOrderButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.billingContinue = page.locator('#billing-buttons-container input');
    this.shippingContinue = page.locator('#shipping-buttons-container input');
    this.paymentMethodContinue = page.locator('#payment-method-buttons-container input');
    this.paymentInfoContinue = page.locator('#payment-info-buttons-container input');
    this.confirmOrderButton = page.locator('#confirm-order-buttons-container input');
    this.successMessage = page.locator('.order-completed .title strong');
  }

  async completeCheckout() {
    await this.click(this.billingContinue);
    await this.click(this.shippingContinue);
    await this.click(this.paymentMethodContinue);
    await this.click(this.paymentInfoContinue);
    await this.click(this.confirmOrderButton);
  }

  async verifyOrderSuccess() {
    await expect(this.successMessage).toHaveText(
      'Your order has been successfully processed!'
    );
  }
}
