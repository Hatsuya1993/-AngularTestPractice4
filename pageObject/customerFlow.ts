import {$, browser, ElementFinder, element, by, $$} from 'protractor'

export class CustomerFlow {

    website : any = browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
    mainHeader : ElementFinder = $("div[class*=mainhdr]")
    mainBody : ElementFinder = $("div[class*='padT20']")
    dropDown : ElementFinder = $("form[ng-submit='showAccount()']")
    customerLoginButton : ElementFinder = $("button[ng-click='customer()']")
    loginButton : ElementFinder = element(by.buttonText("Login"))
    selectionDrop : any = $$("select#userSelect option[ng-repeat='cust in Customers']")
    welcomeName : ElementFinder = $("span.fontBig.ng-binding")

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