import { browser, by, element, ElementFinder, promise, ActionSequence } from 'protractor';

export class AppPage {

  constructor() {
    browser.driver.manage().window().maximize();
  }

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getElementById(id: string): ElementFinder {
    return element(by.id(id));
  }

  getCurrentUrl(): promise.Promise<string> {
    return browser.getCurrentUrl();
  }
}
