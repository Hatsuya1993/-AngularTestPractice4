"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFlowDetails = void 0;
const protractor_1 = require("protractor");
class CustomerFlowDetails {
    constructor() {
        this.website = protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        this.customerLoginButton = protractor_1.$("button[ng-click='customer()']");
        this.loginButton = protractor_1.element(protractor_1.by.buttonText("Login"));
        this.selectionDrop = protractor_1.$$("select#userSelect option[ng-repeat='cust in Customers']");
        this.transactionsButton = protractor_1.element(protractor_1.by.buttonText("Transactions"));
        this.deposit = protractor_1.element(protractor_1.by.buttonText("Deposit"));
        this.withdrawl = protractor_1.element(protractor_1.by.buttonText("Withdrawl"));
        this.transactionsTable = protractor_1.$$("table thead tr");
        this.withdrawlInput = protractor_1.$("input[ng-model='amount']");
        this.withdrawlButton = protractor_1.$("button[type='submit']");
        this.withdrawlErrorMessage = protractor_1.$("span.error.ng-binding");
        this.depositInput = protractor_1.$("input[ng-model='amount']");
        this.depositButtonSubmit = protractor_1.$("button[type='submit']");
        this.depositSuccessMessage = protractor_1.$("div.ng-scope span[ng-show='message'");
        this.transactionData = protractor_1.$$("tbody tr");
        this.balance = protractor_1.$("div[ng-hide='noAccount'] strong:nth-child(2)");
    }
    selectItemMethod(selected) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectionDrop.count().then((data) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < data; i++) {
                    yield this.selectionDrop.get(i).getText().then(each => {
                        if (each === selected) {
                            this.selectionDrop.get(i).click();
                        }
                    });
                }
            }));
        });
    }
}
exports.CustomerFlowDetails = CustomerFlowDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJGbG93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvY3VzdG9tZXJGbG93RGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUU7QUFFckUsTUFBYSxtQkFBbUI7SUFBaEM7UUFFSSxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQTtRQUNqRyx3QkFBbUIsR0FBbUIsY0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDeEUsZ0JBQVcsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDN0Qsa0JBQWEsR0FBUyxlQUFFLENBQUMseURBQXlELENBQUMsQ0FBQTtRQUNuRix1QkFBa0IsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFDM0UsWUFBTyxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUMzRCxjQUFTLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQy9ELHNCQUFpQixHQUFTLGVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzlDLG1CQUFjLEdBQW1CLGNBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQzlELG9CQUFlLEdBQW1CLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQzVELDBCQUFxQixHQUFtQixjQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNsRSxpQkFBWSxHQUFtQixjQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUM1RCx3QkFBbUIsR0FBbUIsY0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDaEUsMEJBQXFCLEdBQW1CLGNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1FBQ2hGLG9CQUFlLEdBQVMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RDLFlBQU8sR0FBbUIsY0FBQyxDQUFDLDhDQUE4QyxDQUFDLENBQUE7SUFjL0UsQ0FBQztJQVpTLGdCQUFnQixDQUFFLFFBQWlCOztZQUNyQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFFLEVBQUU7Z0JBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUM7b0JBQzFCLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNsRCxJQUFHLElBQUksS0FBSyxRQUFRLEVBQUM7NEJBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO3lCQUNwQztvQkFDTCxDQUFDLENBQUMsQ0FBQTtpQkFDTDtZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FFSjtBQS9CRCxrREErQkMifQ==