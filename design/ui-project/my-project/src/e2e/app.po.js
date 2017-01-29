"use strict";
const protractor_1 = require('protractor');
class MyProjectPage {
    navigateTo() {
        return protractor_1.browser.get('/');
    }
    getParagraphText() {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    }
}
exports.MyProjectPage = MyProjectPage;
//# sourceMappingURL=app.po.js.map