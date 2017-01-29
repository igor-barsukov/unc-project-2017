"use strict";
const app_po_1 = require('./app.po');
describe('my-project App', function () {
    let page;
    beforeEach(() => {
        page = new app_po_1.MyProjectPage();
    });
    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map