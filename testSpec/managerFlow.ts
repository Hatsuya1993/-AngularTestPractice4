import { browser, ExpectedConditions } from "protractor"
import {ManagerFlow} from "../pageObject/managerFlow"

describe('Testing the functionality of the manager', async () => {
    
    beforeEach(async() => {
        let managerFlow = new ManagerFlow()
        await managerFlow.website
    })

    it('When the bank manager login button is clicked, it will redirect to the website', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        expect(await browser.getCurrentUrl()).toContain("manager")
    })

    it('Once redirected, check if the add customer button exist', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        expect(await managerFlow.addCustomer.isDisplayed()).toBeTruthy()
    })

    it('Once redirected, check if the open account button exist', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        expect(await managerFlow.openAccount.isDisplayed()).toBeTruthy()
    })

    it('Once redirected, check if the customers button exist', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        expect(await managerFlow.customers.isDisplayed()).toBeTruthy()
    })

    it('When the add customer button is clicked, redirect to the correct website', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist')
        await managerFlow.addCustomer.click()
        expect(await browser.getCurrentUrl()).toContain("addCust")
    })

    it('When the open account button is clicked, redirect to the correct website', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.openAccount), 3000, 'No open account button exist')
        await managerFlow.openAccount.click()
        expect(await browser.getCurrentUrl()).toContain("openAccount")
    })

    it('When the customers button is clicked, redirect to the correct website', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.customers), 3000, 'No customers button exist')
        await managerFlow.customers.click()
        expect(await browser.getCurrentUrl()).toContain("list")
    })

    it('Under add customer, check alert once all the inputs are submitted', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist')
        await managerFlow.addCustomer.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist')
        await managerFlow.addCustomerFirstName.sendKeys('testName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist')
        await managerFlow.addCustomerLastName.sendKeys('testLastName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist')
        await managerFlow.addCustomerPostCode.sendKeys('testPostalCode')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist')
        await managerFlow.addCustomerSubmit.click()
        expect((await browser.switchTo().alert().getText())).toContain('Customer added successfully with customer id')
    })

    it('Under open account, check the alert once all the input are selected', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.openAccount), 3000, 'No add customer button exist')
        await managerFlow.openAccount.click()
        await managerFlow.customerDropDown.count().then(val => {
            managerFlow.customerDropDownFunc(val);
        })
        await managerFlow.currencyDropDown.count().then(val => {
            managerFlow.currencyDropDownFunc(val);
        })
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist')
        await managerFlow.addCustomerSubmit.click()
        expect((await browser.switchTo().alert().getText())).toContain('Account created successfully with account Number')
    })

    it('Once account is added, under customers will display the information', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist')
        await managerFlow.addCustomer.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist')
        await managerFlow.addCustomerFirstName.sendKeys('testName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist')
        await managerFlow.addCustomerLastName.sendKeys('testLastName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist')
        await managerFlow.addCustomerPostCode.sendKeys('testPostalCode')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist')
        await managerFlow.addCustomerSubmit.click()
        await (await browser.switchTo().alert()).accept()
        await managerFlow.customers.click()
        await managerFlow.customerTableColumn.count().then(async(val) => {
            for(let i = 0; i < val; i++){
                switch(i){
                    case 0:
                        await managerFlow.customerTableColumn.get(i).getText().then(data => {
                            expect(data).toBe("testName")
                        })
                        break
                    case 1:
                        await managerFlow.customerTableColumn.get(i).getText().then(data => {
                            expect(data).toBe("testLastName")
                        })
                        break
                    case 2:
                        await managerFlow.customerTableColumn.get(i).getText().then(data => {
                            expect(data).toBe("testPostalCode")
                        })
                        break
                }
            }
        })
    })

    it('Once account is created, login with the same credentials', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist')
        await managerFlow.addCustomer.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist')
        await managerFlow.addCustomerFirstName.sendKeys('testName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist')
        await managerFlow.addCustomerLastName.sendKeys('testLastName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist')
        await managerFlow.addCustomerPostCode.sendKeys('testPostalCode')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist')
        await managerFlow.addCustomerSubmit.click()
        await (await browser.switchTo().alert()).accept()
        await managerFlow.homeButton.click()
        await managerFlow.customerLoginButton.click()
        await managerFlow.nameDropDown.count().then(async(val) => {
            for(let i = 0; i < val; i++){
                await managerFlow.nameDropDown.get(i).getText().then(data => {
                    if(data === "testName testLastName") managerFlow.nameDropDown.get(i).click()
                })
            }
        })
        await managerFlow.loginButton.click()
        await managerFlow.welcomeMessageName.getText().then(data => {
            expect(data).toBe("testName testLastName")
        })
    })

    fit('Once account is created, create an account', async () => {
        let managerFlow = new ManagerFlow()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.bankManagerLogin), 3000, 'No login button manager exist')
        await managerFlow.bankManagerLogin.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomer), 3000, 'No add customer button exist')
        await managerFlow.addCustomer.click()
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerFirstName), 3000, 'No first name input exist')
        await managerFlow.addCustomerFirstName.sendKeys('testName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerLastName), 3000, 'No last name input exist')
        await managerFlow.addCustomerLastName.sendKeys('testLastName')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerPostCode), 3000, 'No post code input exist')
        await managerFlow.addCustomerPostCode.sendKeys('testPostalCode')
        await browser.wait(ExpectedConditions.visibilityOf(managerFlow.addCustomerSubmit), 3000, 'No add customer submit button exist')
        await managerFlow.addCustomerSubmit.click()
        await (await browser.switchTo().alert()).accept()
        await managerFlow.homeButton.click()
        await managerFlow.bankManagerLogin.click()
        await managerFlow.openAccount.click()
        await managerFlow.customerDropDown.count().then(async(data) => {
            for(let i = 0; i < data; i++){
                await managerFlow.customerDropDown.get(i).getText().then(dataNew => {
                    if(dataNew === "testName testLastName"){
                        managerFlow.customerDropDown.get(i).click()
                    }
                })
            }
        })
        await managerFlow.currencyDropDown.count().then(async(data) => {
            for(let i = 0; i < data; i++){
                await managerFlow.currencyDropDown.get(i).getText().then(dataNew => {
                    if(dataNew === "Dollar"){
                        managerFlow.currencyDropDown.get(i).click()
                    }
                })
            }
        })
        await managerFlow.addCustomerSubmit.click()
        await browser.sleep(3000)
        await (await browser.switchTo().alert()).getText().then(data => {
            expect(data).toContain("Account created successfully with account Number :")
        })
    })
})
