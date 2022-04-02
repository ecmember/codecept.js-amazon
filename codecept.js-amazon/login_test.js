Feature('login');


Scenario('Wrong username @testcase1', ({ I }) => {
    I.amOnPage('https://www.amazon.com/');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.waitForElement('//input[@id="ap_email"]');
    I.fillField('//input[@id="ap_email"]','qqq');
    I.click('//input[@id="continue"]');
    I.seeElement('//*[contains(text(),"cannot find")]');

});


Scenario('Right username wrong password @testcase2', ({ I }) => {
    I.amOnPage('https://www.amazon.com/');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.waitForElement('//input[@id="ap_email"]');
    I.fillField('//input[@id="ap_email"]','ecamazontest1@gmail.com');
    I.click('//input[@id="continue"]');
    I.fillField('//input[@id="ap_password"]','qqq');
    I.waitForElement('//input[@id="ap_password"]');
    I.waitForElement('//input[@id="signInSubmit"]');
    I.click('//input[@id="signInSubmit"]');
    I.seeElement('//*[contains(text(),"Your password is incorrect")]');

});

