import {$, browser, ElementFinder, element, by, $$} from 'protractor'

export class HomePage {

    website : any = browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
    mainHeader : ElementFinder = $("div[class*=mainhdr]")
    mainBody : ElementFinder = $("div[class*='padT20']")
    customerLoginButton : ElementFinder = $("button[ng-click='customer()']")
    bankManagerButton : ElementFinder = $("button[ng-click='manager()']")

}