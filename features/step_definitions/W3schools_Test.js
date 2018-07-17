'use strict';

module.exports = function () {

    let HAMBURGER_MENU_SELECTOR = '.w3-bar> .w3-button > .fa',
        SEARCH_ICON_SELECTOR = '//a[@onclick="open_search(this)"]',
        DESKTOP_MAIN_OPTION_SELECTOR = '//a[@id="navbtn_tutorials"]',
        PHONE_MAIN_OPTION_SELECTOR = '//a[@onclick="open_xs_menu(\'tutorials\');"]',
        FIRST_SUB_OPTION_SELECTOR = '.w3-margin-top + .w3-bar-item.w3-button',
        NAV_BAR_SELECTOR = '.w3-bar.w3-theme',
        NAV_MENU_TEXT_SELECTOR = '//a[@class=\'w3-button w3-block w3-large w3-wide\' and text()=\'${text} \']',
        NAV_MENU_ITEMS_SELECTOR = '.w3-bar-item.w3-button.w3-hover-white.w3-padding-16.hidesm > .fa',
        EXAMPLE_BOXES_SELECTOR = '.w3-hide-small.w3-light-grey.w3-card-2 > h3',
        LEFT_MENU_SELECTOR = '.w3-sidebar > .w3-bar-block',
        TOP_TEXT_SELECTOR = '.w3-half > .w3-right',
        CLOSE_BTN_SELECTOR = '.w3-button.w3-xlarge.w3-right',
        GREEN_HOME_BTN_SELECTOR = '.w3-left.w3-btn';

    this.Given(/^the W3schools page is opened$/, () => {
        return driver.get('https://www.w3schools.com/').then(() => {
            return driver.wait(() => driver.findElement(by.xpath(SEARCH_ICON_SELECTOR)).isDisplayed());
        })
    });

    this.When(/^the "Tutorials" option is clicked$/, () => {
        const isPhone = () => driver.findElement(by.css(HAMBURGER_MENU_SELECTOR)).isDisplayed();
        return isPhone().then(phone => {
            //phone
            if (phone) {
                return driver.findElement(by.xpath(PHONE_MAIN_OPTION_SELECTOR)).click();
            }
            //desktop
            else {
                return driver.findElement(by.xpath(DESKTOP_MAIN_OPTION_SELECTOR)).click();
            }
        });
    });

    this.When(/^the very first sub-option is clicked$/, () => {
        return driver.findElement(by.css(FIRST_SUB_OPTION_SELECTOR)).click();
    });

    this.Then(/^the green navigation bar should be (present|hidden)$/, visibility => {
        return expect(driver.findElement(by.css(NAV_BAR_SELECTOR)).isDisplayed()).to.eventually.be.equal(visibility === 'present');
    });

    this.Then(/^the example boxes should be (displayed|hidden)$/, visibility => {
        return expect(driver.findElement(by.css(EXAMPLE_BOXES_SELECTOR)).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the green navigation menu items should be ([^"]*) the hamburger menu$/, placing => {
        return expect(driver.findElement(by.css(NAV_MENU_ITEMS_SELECTOR)).isDisplayed()).to.eventually.be.equal(placing === 'within');
    });

    this.Then(/^the left white menu should be ([^"]*)$/, visibility => {
        return expect(driver.findElement(by.css(LEFT_MENU_SELECTOR)).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the text "THE WORLD'S LARGEST WEB DEVELOPER SITE" should be ([^"]*)$/, visibility => {
        return expect(driver.findElement(by.css(TOP_TEXT_SELECTOR)).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the green navigation menu should have the following items:$/, (dataTable) => {
        const getColumnOfDataTable = (rawTable, index) => {
            index = (index === undefined ? 0 : index);
            return rawTable.raw().map(subarr => subarr[index]);
        };
        const itemByText = text => driver.findElement(by.xpath(NAV_MENU_TEXT_SELECTOR));
        const clickOn = () => driver.findElement(by.css(HAMBURGER_MENU_SELECTOR)).click();
        const checkVisibility = () => {
            return Promise.all(dataArray.map(text => itemByText(text).isDisplayed()))
                .then(result => expect(result.every(Boolean)).to.be.true)
        };
        let dataArray = getColumnOfDataTable(dataTable);
        return driver.findElement(by.css(HAMBURGER_MENU_SELECTOR)).isDisplayed().then((visibility) => {
            //phone
            if (visibility) {
                clickOn();
                driver.sleep(1000);
                checkVisibility();
            }
            //desktop
            else {
                checkVisibility();
            }
        });
    });

    this.Then(/^the close button at the top-right corner should be ([^"]*)$/, visibility => {
        return expect(driver.findElement(by.css(CLOSE_BTN_SELECTOR)).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the search icon should be (displayed|hidden)$/, visibility => {
        return expect(driver.findElement(by.xpath(SEARCH_ICON_SELECTOR)).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the green home button should be (displayed|hidden)$/, visibility => {
        return expect(driver.findElement(by.css(GREEN_HOME_BTN_SELECTOR)).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

};