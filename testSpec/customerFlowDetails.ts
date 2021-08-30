import { browser, ExpectedConditions } from "protractor"
import {CustomerFlowDetails} from "../pageObject/customerFlowDetails"

describe('Check the functionality for the transactions by default', async () => {
    
    beforeEach( async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.website
    })

    it('When the transactions button is clicked by default, no transaction data', async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.customerLoginButton.click()
        await customerFlowDetails.selectItemMethod("Harry Potter")
        await customerFlowDetails.loginButton.click()
        await customerFlowDetails.transactionsButton.click()
        await browser.sleep(3000)
        expect(await customerFlowDetails.transactionsTable.count()).toBe(1)
    })

    it('When the withdrawl button is click initially, error will appear', async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.customerLoginButton.click()
        await customerFlowDetails.selectItemMethod("Harry Potter")
        await customerFlowDetails.loginButton.click()
        await customerFlowDetails.withdrawl.click()
        await customerFlowDetails.withdrawlInput.sendKeys("1000")
        await customerFlowDetails.withdrawlButton.click()
        expect(await customerFlowDetails.withdrawlErrorMessage.getText()).toBe("Transaction Failed. You can not withdraw amount more than the balance.")
    })

})

describe('Check the functionality of the deposit, transactions and withdrawl', () => {
    
    beforeEach( async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.website
    })

    it('Display deposit success', async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.customerLoginButton.click()
        await customerFlowDetails.selectItemMethod("Harry Potter")
        await customerFlowDetails.loginButton.click()
        await customerFlowDetails.deposit.click()
        await customerFlowDetails.depositInput.sendKeys('1000')
        await customerFlowDetails.depositButtonSubmit.click()
        expect(await customerFlowDetails.depositSuccessMessage.isDisplayed()).toBeTruthy
    })

    it('Display deposit text', async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.customerLoginButton.click()
        await customerFlowDetails.selectItemMethod("Harry Potter")
        await customerFlowDetails.loginButton.click()
        await customerFlowDetails.deposit.click()
        await customerFlowDetails.depositInput.sendKeys('1000')
        await customerFlowDetails.depositButtonSubmit.click()
        expect(await customerFlowDetails.depositSuccessMessage.getText()).toBe("Deposit Successful")
    })

    it('Display transactions data', async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.customerLoginButton.click()
        await customerFlowDetails.selectItemMethod("Harry Potter")
        await customerFlowDetails.loginButton.click()
        await customerFlowDetails.deposit.click()
        await customerFlowDetails.depositInput.sendKeys('1000')
        await customerFlowDetails.depositButtonSubmit.click()
        await browser.sleep(3000)
        await customerFlowDetails.transactionsButton.click()
        await browser.wait(ExpectedConditions.visibilityOf(customerFlowDetails.transactionData), 3000, 'error message')
        expect(await customerFlowDetails.transactionData.count()).toBeGreaterThan(0)
    })

    it('Display transactions data', async () => {
        let customerFlowDetails = new CustomerFlowDetails()
        await customerFlowDetails.customerLoginButton.click()
        await customerFlowDetails.selectItemMethod("Harry Potter")
        await customerFlowDetails.loginButton.click()
        await customerFlowDetails.deposit.click()
        await customerFlowDetails.depositInput.sendKeys('1000')
        await customerFlowDetails.depositButtonSubmit.click()
        await customerFlowDetails.withdrawl.click()
        await customerFlowDetails.withdrawlInput.sendKeys('1000')
        await customerFlowDetails.withdrawlButton.click()
        expect(await customerFlowDetails.balance.getText()).toBe('0')
    })

})

