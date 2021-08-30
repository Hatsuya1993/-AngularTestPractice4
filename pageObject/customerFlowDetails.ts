import {$, browser, ElementFinder, element, by, $$} from 'protractor'

export class CustomerFlowDetails {

    website : any = browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
    customerLoginButton : ElementFinder = $("button[ng-click='customer()']")
    loginButton : ElementFinder = element(by.buttonText("Login"))
    selectionDrop : any = $$("select#userSelect option[ng-repeat='cust in Customers']")
    transactionsButton : ElementFinder = element(by.buttonText("Transactions"))
    deposit : ElementFinder = element(by.buttonText("Deposit"))
    withdrawl : ElementFinder = element(by.buttonText("Withdrawl"))
    transactionsTable : any = $$("table thead tr")
    withdrawlInput : ElementFinder = $("input[ng-model='amount']")
    withdrawlButton : ElementFinder = $("button[type='submit']")
    withdrawlErrorMessage : ElementFinder = $("span.error.ng-binding")
    depositInput : ElementFinder = $("input[ng-model='amount']")
    depositButtonSubmit : ElementFinder = $("button[type='submit']")
    depositSuccessMessage : ElementFinder = $("div.ng-scope span[ng-show='message'")
    transactionData : any = $$("tbody tr")
    balance : ElementFinder = $("div[ng-hide='noAccount'] strong:nth-child(2)")

    async selectItemMethod (selected : String) {
        await this.selectionDrop.count().then(async(data) => {
            for (let i = 0; i < data; i++){
                await this.selectionDrop.get(i).getText().then(each => {
                    if(each === selected){
                        this.selectionDrop.get(i).click()
                    }
                })
            }
        })
    }

}