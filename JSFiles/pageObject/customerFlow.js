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
exports.CustomerFlow = void 0;
const protractor_1 = require("protractor");
class CustomerFlow {
    constructor() {
        this.website = protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        this.mainHeader = protractor_1.$("div[class*=mainhdr]");
        this.mainBody = protractor_1.$("div[class*='padT20']");
        this.dropDown = protractor_1.$("form[ng-submit='showAccount()']");
        this.customerLoginButton = protractor_1.$("button[ng-click='customer()']");
        this.loginButton = protractor_1.element(protractor_1.by.buttonText("Login"));
        this.selectionDrop = protractor_1.$$("select#userSelect option[ng-repeat='cust in Customers']");
        this.welcomeName = protractor_1.$("span.fontBig.ng-binding");
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
exports.CustomerFlow = CustomerFlow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJGbG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9jdXN0b21lckZsb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFFO0FBRXJFLE1BQWEsWUFBWTtJQUF6QjtRQUVJLFlBQU8sR0FBUyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFBO1FBQ2pHLGVBQVUsR0FBbUIsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDckQsYUFBUSxHQUFtQixjQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNwRCxhQUFRLEdBQW1CLGNBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1FBQy9ELHdCQUFtQixHQUFtQixjQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUN4RSxnQkFBVyxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUM3RCxrQkFBYSxHQUFTLGVBQUUsQ0FBQyx5REFBeUQsQ0FBQyxDQUFBO1FBQ25GLGdCQUFXLEdBQW1CLGNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBYzlELENBQUM7SUFaUyxnQkFBZ0IsQ0FBRSxRQUFpQjs7WUFDckMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLElBQUksRUFBRSxFQUFFO2dCQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFDO29CQUMxQixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbEQsSUFBRyxJQUFJLEtBQUssUUFBUSxFQUFDOzRCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTt5QkFDcEM7b0JBQ0wsQ0FBQyxDQUFDLENBQUE7aUJBQ0w7WUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBRUo7QUF2QkQsb0NBdUJDIn0=