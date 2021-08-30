"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.website = protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        this.mainHeader = protractor_1.$("div[class*=mainhdr]");
        this.mainBody = protractor_1.$("div[class*='padT20']");
        this.customerLoginButton = protractor_1.$("button[ng-click='customer()']");
        this.bankManagerButton = protractor_1.$("button[ng-click='manager()']");
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2hvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFxRTtBQUVyRSxNQUFhLFFBQVE7SUFBckI7UUFFSSxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQTtRQUNqRyxlQUFVLEdBQW1CLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3JELGFBQVEsR0FBbUIsY0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDcEQsd0JBQW1CLEdBQW1CLGNBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1FBQ3hFLHNCQUFpQixHQUFtQixjQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUV6RSxDQUFDO0NBQUE7QUFSRCw0QkFRQyJ9