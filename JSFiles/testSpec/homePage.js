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
const homePage_1 = require("../pageObject/homePage");
describe('Testing the home page', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        yield homePage.website;
    }));
    it('Checking if the header is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        expect(yield homePage.mainHeader.isDisplayed()).toBeTruthy();
    }));
    it('Checking if the body is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        expect(yield homePage.mainBody.isDisplayed()).toBeTruthy();
    }));
    it('Checking if the cutomer login button is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        expect(yield homePage.customerLoginButton.isDisplayed()).toBeTruthy();
    }));
    it('Checking if the bank manager button is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        expect(yield homePage.bankManagerButton.isDisplayed()).toBeTruthy();
    }));
}));
describe('Testing the button for customer and bank manager login', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        yield homePage.website;
    }));
    it('When the customer login button is clicked, url will contain customer', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        yield homePage.customerLoginButton.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("customer");
    }));
    it('When the customer login button is clicked, url will contain manager', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        yield homePage.bankManagerButton.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("manager");
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFvQztBQUNwQyxxREFBK0M7QUFFL0MsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtJQUV6QyxVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQTtJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQVMsRUFBRTtRQUNqRCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtRQUM3QixNQUFNLENBQUMsTUFBTSxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7UUFDL0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzlELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbURBQW1ELEVBQUUsR0FBUyxFQUFFO1FBQy9ELElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3pFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0RBQWtELEVBQUUsR0FBUyxFQUFFO1FBQzlELElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLHdEQUF3RCxFQUFFLEdBQVMsRUFBRTtJQUUxRSxVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQTtJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNFQUFzRSxFQUFFLEdBQVMsRUFBRTtRQUNsRixJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtRQUM3QixNQUFNLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMxQyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscUVBQXFFLEVBQUUsR0FBUyxFQUFFO1FBQ2pGLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3hDLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==