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
const customerFlowDetails_1 = require("../pageObject/customerFlowDetails");
describe('Check the functionality for the transactions by default', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.website;
    }));
    it('When the transactions button is clicked by default, no transaction data', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.customerLoginButton.click();
        yield customerFlowDetails.selectItemMethod("Harry Potter");
        yield customerFlowDetails.loginButton.click();
        yield customerFlowDetails.transactionsButton.click();
        yield protractor_1.browser.sleep(3000);
        expect(yield customerFlowDetails.transactionsTable.count()).toBe(1);
    }));
    it('When the withdrawl button is click initially, error will appear', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.customerLoginButton.click();
        yield customerFlowDetails.selectItemMethod("Harry Potter");
        yield customerFlowDetails.loginButton.click();
        yield customerFlowDetails.withdrawl.click();
        yield customerFlowDetails.withdrawlInput.sendKeys("1000");
        yield customerFlowDetails.withdrawlButton.click();
        expect(yield customerFlowDetails.withdrawlErrorMessage.getText()).toBe("Transaction Failed. You can not withdraw amount more than the balance.");
    }));
}));
describe('Check the functionality of the deposit, transactions and withdrawl', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.website;
    }));
    it('Display deposit success', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.customerLoginButton.click();
        yield customerFlowDetails.selectItemMethod("Harry Potter");
        yield customerFlowDetails.loginButton.click();
        yield customerFlowDetails.deposit.click();
        yield customerFlowDetails.depositInput.sendKeys('1000');
        yield customerFlowDetails.depositButtonSubmit.click();
        expect(yield customerFlowDetails.depositSuccessMessage.isDisplayed()).toBeTruthy;
    }));
    it('Display deposit text', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.customerLoginButton.click();
        yield customerFlowDetails.selectItemMethod("Harry Potter");
        yield customerFlowDetails.loginButton.click();
        yield customerFlowDetails.deposit.click();
        yield customerFlowDetails.depositInput.sendKeys('1000');
        yield customerFlowDetails.depositButtonSubmit.click();
        expect(yield customerFlowDetails.depositSuccessMessage.getText()).toBe("Deposit Successful");
    }));
    it('Display transactions data', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.customerLoginButton.click();
        yield customerFlowDetails.selectItemMethod("Harry Potter");
        yield customerFlowDetails.loginButton.click();
        yield customerFlowDetails.deposit.click();
        yield customerFlowDetails.depositInput.sendKeys('1000');
        yield customerFlowDetails.depositButtonSubmit.click();
        yield protractor_1.browser.sleep(3000);
        yield customerFlowDetails.transactionsButton.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(customerFlowDetails.transactionData), 3000, 'error message');
        expect(yield customerFlowDetails.transactionData.count()).toBeGreaterThan(0);
    }));
    it('Display transactions data', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlowDetails = new customerFlowDetails_1.CustomerFlowDetails();
        yield customerFlowDetails.customerLoginButton.click();
        yield customerFlowDetails.selectItemMethod("Harry Potter");
        yield customerFlowDetails.loginButton.click();
        yield customerFlowDetails.deposit.click();
        yield customerFlowDetails.depositInput.sendKeys('1000');
        yield customerFlowDetails.depositButtonSubmit.click();
        yield customerFlowDetails.withdrawl.click();
        yield customerFlowDetails.withdrawlInput.sendKeys('1000');
        yield customerFlowDetails.withdrawlButton.click();
        expect(yield customerFlowDetails.balance.getText()).toBe('0');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJGbG93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2N1c3RvbWVyRmxvd0RldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQsMkVBQXFFO0FBRXJFLFFBQVEsQ0FBQyx5REFBeUQsRUFBRSxHQUFTLEVBQUU7SUFFM0UsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNuQixJQUFJLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQTtRQUNuRCxNQUFNLG1CQUFtQixDQUFDLE9BQU8sQ0FBQTtJQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHlFQUF5RSxFQUFFLEdBQVMsRUFBRTtRQUNyRixJQUFJLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQTtRQUNuRCxNQUFNLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3JELE1BQU0sbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDMUQsTUFBTSxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDN0MsTUFBTSxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNwRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsaUVBQWlFLEVBQUUsR0FBUyxFQUFFO1FBQzdFLElBQUksbUJBQW1CLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFBO1FBQ25ELE1BQU0sbUJBQW1CLENBQUMsbUJBQW1CLENBQUMs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