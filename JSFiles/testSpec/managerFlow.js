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
const protractor_1 = require("protractor");
const managerFlow_1 = require("../pageObject/managerFlow");
describe('Testing the functionality of the manager', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield managerFlow.website;
    }));
    it('When the bank manager login button is clicked, it will redirect to the website', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("manager");
    }));
    it('Once redirected, check if the add customer button exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        expect(yield managerFlow.addCustomer.isDisplayed()).toBeTruthy();
    }));
    it('Once redirected, check if the open account button exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        expect(yield managerFlow.openAccount.isDisplayed()).toBeTruthy();
    }));
    it('Once redirected, check if the customers button exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        expect(yield managerFlow.customers.isDisplayed()).toBeTruthy();
    }));
    it('When the add customer button is clicked, redirect to the correct website', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist');
        yield managerFlow.addCustomer.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("addCust");
    }));
    it('When the open account button is clicked, redirect to the correct website', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.openAccount), 3000, 'No open account button exist');
        yield managerFlow.openAccount.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("openAccount");
    }));
    it('When the customers button is clicked, redirect to the correct website', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.customers), 3000, 'No customers button exist');
        yield managerFlow.customers.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("list");
    }));
    it('Under add customer, check alert once all the inputs are submitted', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist');
        yield managerFlow.addCustomer.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist');
        yield managerFlow.addCustomerFirstName.sendKeys('testName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist');
        yield managerFlow.addCustomerLastName.sendKeys('testLastName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist');
        yield managerFlow.addCustomerPostCode.sendKeys('testPostalCode');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist');
        yield managerFlow.addCustomerSubmit.click();
        expect((yield protractor_1.browser.switchTo().alert().getText())).toContain('Customer added successfully with customer id');
    }));
    it('Under open account, check the alert once all the input are selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.openAccount), 3000, 'No add customer button exist');
        yield managerFlow.openAccount.click();
        yield managerFlow.customerDropDown.count().then(val => {
            managerFlow.customerDropDownFunc(val);
        });
        yield managerFlow.currencyDropDown.count().then(val => {
            managerFlow.currencyDropDownFunc(val);
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist');
        yield managerFlow.addCustomerSubmit.click();
        expect((yield protractor_1.browser.switchTo().alert().getText())).toContain('Account created successfully with account Number');
    }));
    it('Once account is added, under customers will display the information', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist');
        yield managerFlow.addCustomer.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist');
        yield managerFlow.addCustomerFirstName.sendKeys('testName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist');
        yield managerFlow.addCustomerLastName.sendKeys('testLastName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist');
        yield managerFlow.addCustomerPostCode.sendKeys('testPostalCode');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist');
        yield managerFlow.addCustomerSubmit.click();
        yield (yield protractor_1.browser.switchTo().alert()).accept();
        yield managerFlow.customers.click();
        yield managerFlow.customerTableColumn.count().then((val) => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < val; i++) {
                switch (i) {
                    case 0:
                        yield managerFlow.customerTableColumn.get(i).getText().then(data => {
                            expect(data).toBe("testName");
                        });
                        break;
                    case 1:
                        yield managerFlow.customerTableColumn.get(i).getText().then(data => {
                            expect(data).toBe("testLastName");
                        });
                        break;
                    case 2:
                        yield managerFlow.customerTableColumn.get(i).getText().then(data => {
                            expect(data).toBe("testPostalCode");
                        });
                        break;
                }
            }
        }));
    }));
    it('Once account is created, login with the same credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist');
        yield managerFlow.addCustomer.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist');
        yield managerFlow.addCustomerFirstName.sendKeys('testName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist');
        yield managerFlow.addCustomerLastName.sendKeys('testLastName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist');
        yield managerFlow.addCustomerPostCode.sendKeys('testPostalCode');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist');
        yield managerFlow.addCustomerSubmit.click();
        yield (yield protractor_1.browser.switchTo().alert()).accept();
        yield managerFlow.homeButton.click();
        yield managerFlow.customerLoginButton.click();
        yield managerFlow.nameDropDown.count().then((val) => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < val; i++) {
                yield managerFlow.nameDropDown.get(i).getText().then(data => {
                    if (data === "testName testLastName")
                        managerFlow.nameDropDown.get(i).click();
                });
            }
        }));
        yield managerFlow.loginButton.click();
        yield managerFlow.welcomeMessageName.getText().then(data => {
            expect(data).toBe("testName testLastName");
        });
    }));
    fit('Once account is created, create an account', () => __awaiter(void 0, void 0, void 0, function* () {
        let managerFlow = new managerFlow_1.ManagerFlow();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist');
        yield managerFlow.bankManagerLogin.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist');
        yield managerFlow.addCustomer.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist');
        yield managerFlow.addCustomerFirstName.sendKeys('testName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist');
        yield managerFlow.addCustomerLastName.sendKeys('testLastName');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist');
        yield managerFlow.addCustomerPostCode.sendKeys('testPostalCode');
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist');
        yield managerFlow.addCustomerSubmit.click();
        yield (yield protractor_1.browser.switchTo().alert()).accept();
        yield managerFlow.homeButton.click();
        yield managerFlow.bankManagerLogin.click();
        yield managerFlow.openAccount.click();
        yield managerFlow.customerDropDown.count().then((data) => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < data; i++) {
                yield managerFlow.customerDropDown.get(i).getText().then(dataNew => {
                    if (dataNew === "testName testLastName") {
                        managerFlow.customerDropDown.get(i).click();
                    }
                });
            }
        }));
        yield managerFlow.currencyDropDown.count().then((data) => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < data; i++) {
                yield managerFlow.currencyDropDown.get(i).getText().then(dataNew => {
                    if (dataNew === "Dollar") {
                        managerFlow.currencyDropDown.get(i).click();
                    }
                });
            }
        }));
        yield managerFlow.addCustomerSubmit.click();
        yield protractor_1.browser.sleep(3000);
        yield (yield protractor_1.browser.switchTo().alert()).getText().then(data => {
            expect(data).toContain("Account created successfully with account Number :");
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlckZsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9tYW5hZ2VyRmxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCwyREFBcUQ7QUFFckQsUUFBUSxDQUFDLDBDQUEwQyxFQUFFLEdBQVMsRUFBRTtJQUU1RCxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ2pCLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFBO1FBQ25DLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQTtJQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGdGQUFnRixFQUFFLEdBQVMsRUFBRTtRQUM1RixJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQTtRQUNuQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsK0JBQStCLENBQUMsQ0FBQTtRQUN4SCxNQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMxQyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMseURBQXlELEVBQUUsR0FBUyxFQUFFO1FBQ3JFLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFBO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSwrQkFBK0IsQ0FBQyxDQUFBO1FBQ3hILE1BQU0sV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzFDLE1B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