import { test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { ProductPage } from '../pages/ProductPage';
import { products } from '../utils/testData';

test('Place order with multiple products (apply price calculation checks)', async ({ page }) => {
  const cartPage = new CartPage(page);
  const productPage = new ProductPage(page);

  // Відкриваємо корзину
  await cartPage.open();

  // Якщо пуста — додаємо продукти
  if (await cartPage.isEmpty()) {
    for (const product of products) {
      await productPage.openProduct(product.url);
      await productPage.addToCart();
    }

    await cartPage.open();
  }


  // Перевіряємо що:
  // - товар є
  // - total price є
  // - не залежить від quantity
  await cartPage.verifyCartHasItemsAndPrice();

  //  Checkout
  await cartPage.agreeWithTerms();
  await cartPage.proceedToCheckout();
});
