'use strict';

module.exports = function () {

    this.Given(/^the W3schools page is opened$/, () => {
        return driver.get('https://www.w3schools.com/').then(() => {
            return driver.wait(() => driver.findElement(by.css('.w3-right > .fa')).isDisplayed());
        })
    });

    this.When(/^the "Tutorials" option is clicked$/, () => {
        let hamburgerMenu = ".w3-bar> .w3-button > .fa";
        let desktopOption = `//a[@id="navbtn_tutorials"]`;
        let phoneOption = `//a[@onclick="open_xs_menu('tutorials');"]`;
        const isPhone = () => driver.findElement(by.css(hamburgerMenu)).isDisplayed();
        return isPhone().then(phone => {
            //phone
            if (phone) {
                return driver.findElement(by.xpath(phoneOption)).click();
            }
            //desktop
            else {
                return driver.findElement(by.xpath(desktopOption)).click();
            }
        });
    });

    this.When(/^the very first option is clicked$/, () => {
        return driver.findElement(by.css('.w3-margin-top + .w3-bar-item.w3-button',)).click();
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

    this.Then(/^the green navigation menu should have the following items:$/, (dataTable) => {
        let hamburgerMenu = ".w3-bar> .w3-button > .fa";
        const getColumnOfDataTable = (rawTable, index) => {
            index = (index === undefined ? 0 : index);
            return rawTable.raw().map(subarr => subarr[index]);
        };
        const itemByText = text => driver.findElement(by.xpath(`//a[@class='w3-button w3-block w3-large w3-wide' and text()='${text} ']`));
        const clickOn = () => driver.findElement(by.css(hamburgerMenu)).click();
        const checkVisibility = () => {
            return Promise.all(dataArray.map(text => itemByText(text).isDisplayed()))
                .then(result => expect(result.every(Boolean)).to.be.true)
        };
        let dataArray = getColumnOfDataTable(dataTable);
        return driver.findElement(by.css(hamburgerMenu)).isDisplayed().then((visibility) => {
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
        return expect(driver.findElement(by.css('.w3-button.w3-xlarge.w3-right')).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the search icon should be (displayed|hidden)$/, visibility => {
        return expect(driver.findElement(by.xpath('//a[@onclick="open_search(this)"]')).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

    this.Then(/^the green home button should be (displayed|hidden)$/, visibility => {
        return expect(driver.findElement(by.css('.w3-left.w3-btn')).isDisplayed()).to.eventually.be.equal(visibility === 'displayed');
    });

};