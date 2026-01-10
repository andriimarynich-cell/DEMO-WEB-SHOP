class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('input[value="Add to cart"]');
    this.quantityInput = page.locator('input.qty-input');
  }

  async setQuantity(quantity) {
    await this.quantityInput.fill(quantity.toString());
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductPage };
