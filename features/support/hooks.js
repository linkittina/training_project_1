'use strict';

require('geckodriver');
require('cucumber').Util.Colors(true);

const chai = require('chai'), chaiAsPromised = require('chai-as-promised');
const webdriver = require('selenium-webdriver');

chai.use(chaiAsPromised);
global.expect = chai.expect;
global.by = webdriver.By;

module.exports = function ()  {
    this.setDefaultTimeout(60000);
    this.registerHandler('BeforeFeatures', () => {
        global.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        return global.driver.manage().window().maximize();
    });
    this.Before({tags: ['@phone']}, () => global.driver.manage().window().setSize(480, 800));
    this.Before({tags: ['@desktop']}, () => global.driver.manage().window().setSize(1024, 800));
    this.registerHandler('AfterFeatures', () =>  global.driver.quit());
};