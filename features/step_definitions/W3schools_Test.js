'use strict';

module.exports = function () {

    this.Given(/^the W3schools page is opened$/, () => {
        return driver.get('https://www.w3schools.com/').then(() => {
            return driver.wait(() => driver.findElement(by.css('.w3-right > .fa')).isDisplayed());
        })
    });

    this.When(/^the hamburger menu icon on the navigation bar is clicked$/, () => {
        return driver.findElement(by.css('.w3-bar-item.w3-button.w3-hover-white.w3-padding-16.hidesm > .fa')).click();
    });

    this.Then(/^the green navigation bar should be (present|hidden)$/, visibility => {
        return expect(driver.findElement(by.css('.w3-bar.w3-theme')).isDisplayed()).to.eventually.be.equal(visibility === 'present');
    });

    this.Then(/^the example boxes should be (displayed|hidden)$/, visibility => {
        return expect(driver.findElement(by.css('.w3-hide-small.w3-light-grey.w3-card-2 > h3')).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the green navigation menu items should be ([^"]*) the hamburger menu$/, placing => {
        return expect(driver.findElement(by.css('.w3-bar-item.w3-button.w3-hover-white.w3-padding-16.hidesm > .fa')).isDisplayed()).to.eventually.be.equal(placing === 'within');
    });

    this.Then(/^the left white menu should be ([^"]*)$/, visibility => {
        return expect(driver.findElement(by.css('.w3-sidebar > .w3-bar-block')).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the text "THE WORLD'S LARGEST WEB DEVELOPER SITE" should be ([^"]*)$/, visibility => {
        return expect(driver.findElement(by.css('.w3-half > .w3-right')).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });
};
