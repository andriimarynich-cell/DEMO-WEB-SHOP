const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { products } = require('../utils/testData');

test('Place order with multiple products', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goTo();
  await homePage.openComputersCategory();

  for (const product of products) {
    await page.click(`a:has-text("${product.name}")`);

    const productPage = new ProductPage(page);
    await productPage.setQuantity(product.quantity);
    await productPage.addToCart();

    await page.waitForTimeout(1000); // demo shop needs delay
  }

  await page.goto('/cart');

  for (const product of products) {
    const priceText = await page
      .locator(`tr:has-text("${product.name}") .product-unit-price`)
      .innerText();

    const price = parseFloat(priceText.replace('$', ''));
    expect(price).toBe(product.expectedPrice);
  }
});
