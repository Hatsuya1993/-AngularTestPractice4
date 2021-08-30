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
const customerFlow_1 = require("../pageObject/customerFlow");
describe('Elements exist', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlow = new customerFlow_1.CustomerFlow();
        yield customerFlow.website;
    }));
    it('Check if the dropdown exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlow = new customerFlow_1.CustomerFlow();
        yield customerFlow.customerLoginButton.click();
        expect(yield customerFlow.dropDown.isDisplayed()).toBeTruthy();
        expect(yield customerFlow.loginButton.getAttribute('class')).toContain("ng-hide");
    }));
    it('Check if the initial button is not shown before selection from dropdown', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlow = new customerFlow_1.CustomerFlow();
        yield customerFlow.customerLoginButton.click();
        expect(yield customerFlow.loginButton.getAttribute('class')).toContain("ng-hide");
    }));
    it('Check after selection from dropdown, the button exist', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlow = new customerFlow_1.CustomerFlow();
        yield customerFlow.customerLoginButton.click();
        yield customerFlow.selectItemMethod("Harry Potter");
        expect(yield customerFlow.loginButton.getAttribute('class')).not.toContain("ng-hide");
    }));
    it('After login with the selection, check the output from the page name', () => __awaiter(void 0, void 0, void 0, function* () {
        let customerFlow = new customerFlow_1.CustomerFlow();
        yield customerFlow.customerLoginButton.click();
        yield customerFlow.selectItemMethod("Harry Potter");
        yield customerFlow.loginButton.click();
        expect(yield customerFlow.welcomeName.getText()).toBe("Harry Potter");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJGbG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvY3VzdG9tZXJGbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQXVEO0FBRXZELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFFNUIsVUFBVSxDQUFDLEdBQVMsRUFBRTtRQUNsQixJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQTtRQUNyQyxNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUE7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7UUFDekMsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUE7UUFDckMsTUFBTSxZQUFZLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDOUMsTUFBTSxDQUFDLE1BQU0sWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzlELE1BQU0sQ0FBQyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JGLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMseUVBQXlFLEVBQUUsR0FBUyxFQUFFO1FBQ3JGLElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFBO1FBQ3JDLE1BQU0sWUFBWSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JGLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBUyxFQUFFO1FBQ25FLElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFBO1FBQ3JDLE1BQU0sWUFBWSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzlDLE1BQU0sWUFBWSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ25ELE1BQU0sQ0FBQyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN6RixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHFFQUFxRSxFQUFFLEdBQVMsRUFBRTtRQUNqRixJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQTtRQUNyQyxNQUFNLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM5QyxNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNuRCxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDdEMsTUFBTSxDQUFDLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUV6RSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==