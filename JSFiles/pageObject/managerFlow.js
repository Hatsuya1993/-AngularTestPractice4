"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerFlow = void 0;
const protractor_1 = require("protractor");
class ManagerFlow {
    constructor() {
        this.website = protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        this.bankManagerLogin = protractor_1.$("button[ng-click='manager()']");
        this.addCustomer = protractor_1.$("button[ng-click='addCust()']");
        this.openAccount = protractor_1.$("button[ng-click='openAccount()']");
        this.customers = protractor_1.$("button[ng-click='showCust()']");
        this.addCustomerFirstName = protractor_1.$("input[placeholder='First Name']");
        this.addCustomerLastName = protractor_1.$("input[placeholder='Last Name']");
        this.addCustomerPostCode = protractor_1.$("input[placeholder='Post Code']");
        this.addCustomerSubmit = protractor_1.$("button[type='submit']");
        this.addAccountSubmit = protractor_1.$("button[type='submit']");
        this.customerDropDown = protractor_1.$$("#userSelect option");
        this.currencyDropDown = protractor_1.$$("#currency option");
        this.customerTableRow = protractor_1.$$('table.table.table-bordered.table-striped tbody tr').last();
        this.customerTableColumn = this.customerTableRow.$$('td');
        this.homeButton = protractor_1.$("button[ng-click='home()']");
        this.customerLoginButton = protractor_1.$("button[ng-click='customer()']");
        this.nameDropDown = protractor_1.$$("div.form-group select option");
        this.loginButton = protractor_1.element(protractor_1.by.buttonText("Login"));
        this.welcomeMessageName = protractor_1.$("strong span.fontBig.ng-binding");
    }
    customerDropDownFunc(val) {
        for (let i = 0; i < val; i++) {
            this.customerDropDown.get(i).getText().then(text => {
                if (text === "Harry Potter") {
                    return this.customerDropDown.get(i).click();
                }
            });
        }
    }
    currencyDropDownFunc(val) {
        for (let i = 0; i < val; i++) {
            this.currencyDropDown.get(i).getText().then(text => {
                if (text === "Dollar") {
                    return this.currencyDropDown.get(i).click();
                }
            });
        }
    }
}
exports.ManagerFlow = ManagerFlow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlckZsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L21hbmFnZXJGbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFxRTtBQUVyRSxNQUFhLFdBQVc7SUFBeEI7UUFFSSxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQTtRQUNqRyxxQkFBZ0IsR0FBbUIsY0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUE7UUFDcEUsZ0JBQVcsR0FBbUIsY0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUE7UUFDL0QsZ0JBQVcsR0FBbUIsY0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7UUFDbkUsY0FBUyxHQUFtQixjQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUM5RCx5QkFBb0IsR0FBbUIsY0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFDM0Usd0JBQW1CLEdBQW1CLGNBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQ3pFLHdCQUFtQixHQUFtQixjQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUN6RSxzQkFBaUIsR0FBbUIsY0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDOUQscUJBQWdCLEdBQW1CLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQzdELHFCQUFnQixHQUFTLGVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pELHFCQUFnQixHQUFTLGVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9DLHFCQUFnQixHQUFRLGVBQUUsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3RGLHdCQUFtQixHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekQsZUFBVSxHQUFtQixjQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUMzRCx3QkFBbUIsR0FBbUIsY0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDeEUsaUJBQVksR0FBUSxlQUFFLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUN0RCxnQkFBVyxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUM1RCx1QkFBa0IsR0FBa0IsY0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7SUFxQjNFLENBQUM7SUFuQkcsb0JBQW9CLENBQUMsR0FBVztRQUM1QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvQyxJQUFHLElBQUksS0FBSyxjQUFjLEVBQUU7b0JBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtpQkFDOUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVELG9CQUFvQixDQUFDLEdBQVc7UUFDNUIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0MsSUFBRyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7aUJBQzlDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7Q0FDSjtBQXpDRCxrQ0F5Q0MifQ==