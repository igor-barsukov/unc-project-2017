"use strict";
var protractor_1 = require('protractor');
var MyProjectPage = (function () {
    function MyProjectPage() {
    }
    MyProjectPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MyProjectPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return MyProjectPage;
}());
exports.MyProjectPage = MyProjectPage;
//# sourceMappingURL=app.po.js.map