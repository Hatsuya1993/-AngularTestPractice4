import {$, browser, ElementFinder, element, by, $$} from 'protractor'

export class ManagerFlow {

    website : any = browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
    bankManagerLogin : ElementFinder = $("button[ng-click='manager()']")
    addCustomer : ElementFinder = $("button[ng-click='addCust()']")
    openAccount : ElementFinder = $("button[ng-click='openAccount()']")
    customers : ElementFinder = $("button[ng-click='showCust()']")
    addCustomerFirstName : ElementFinder = $("input[placeholder='First Name']")
    addCustomerLastName : ElementFinder = $("input[placeholder='Last Name']")
    addCustomerPostCode : ElementFinder = $("input[placeholder='Post Code']")
    addCustomerSubmit : ElementFinder = $("button[type='submit']")
    addAccountSubmit : ElementFinder = $("button[type='submit']")
    customerDropDown : any = $$("#userSelect option")
    currencyDropDown : any = $$("#currency option")
    customerTableRow: any = $$('table.table.table-bordered.table-striped tbody tr').last()
    customerTableColumn: any = this.customerTableRow.$$('td')
    homeButton : ElementFinder = $("button[ng-click='home()']")
    customerLoginButton : ElementFinder = $("button[ng-click='customer()']")
    nameDropDown: any = $$("div.form-group select option")
    loginButton: ElementFinder = element(by.buttonText("Login"))
    welcomeMessageName: ElementFinder = $("strong span.fontBig.ng-binding")

    customerDropDownFunc(val: number) {
        for(let i = 0; i < val; i++){
            this.customerDropDown.get(i).getText().then(text => {
                if(text === "Harry Potter") {
                    return this.customerDropDown.get(i).click()
                }
            })
        }
    }

    currencyDropDownFunc(val: number){
        for(let i = 0; i < val; i++){
            this.currencyDropDown.get(i).getText().then(text => {
                if(text === "Dollar") {
                    return this.currencyDropDown.get(i).click()
                }
            })
        }
    }
}