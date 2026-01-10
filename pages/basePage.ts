// pages/BasePage.ts
import { Page, Locator, expect } from '@playwright/test';

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(text);
    }

    async getText(locator: Locator): Promise<string> {
        await locator.waitFor({ state: 'visible' });
        return locator.innerText();
    }

    async getValue(locator: Locator): Promise<string> {
        await locator.waitFor({ state: 'visible' });
        return locator.inputValue();
    }
}
