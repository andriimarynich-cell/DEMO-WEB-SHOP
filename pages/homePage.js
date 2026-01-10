class HomePage {
  constructor(page) {
    this.page = page;

    // 🔥 Accessible, stable locator
    this.computersMenu = page.getByRole('link', { name: 'Computers' }).first();
  }

  async goTo() {
    await this.page.goto('/');
  }

  async openComputersCategory() {
    await this.computersMenu.click();
  }
}

module.exports = { HomePage };
