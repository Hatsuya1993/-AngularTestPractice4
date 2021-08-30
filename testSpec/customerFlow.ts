import { browser } from "protractor"
import {CustomerFlow} from "../pageObject/customerFlow"

describe('Elements exist', () => {
    
    beforeEach(async () => {
        let customerFlow = new CustomerFlow()
        await customerFlow.website
    })

    it('Check if the dropdown exist', async () => {
        let customerFlow = new CustomerFlow()
        await customerFlow.customerLoginButton.click()
        expect(await customerFlow.dropDown.isDisplayed()).toBeTruthy()
        expect(await customerFlow.loginButton.getAttribute('class')).toContain("ng-hide")
    })

    it('Check if the initial button is not shown before selection from dropdown', async () => {
        let customerFlow = new CustomerFlow()
        await customerFlow.customerLoginButton.click()
        expect(await customerFlow.loginButton.getAttribute('class')).toContain("ng-hide")
    })

    it('Check after selection from dropdown, the button exist', async () => {
        let customerFlow = new CustomerFlow()
        await customerFlow.customerLoginButton.click()
        await customerFlow.selectItemMethod("Harry Potter")
        expect(await customerFlow.loginButton.getAttribute('class')).not.toContain("ng-hide")
    })

    it('After login with the selection, check the output from the page name', async () => {
        let customerFlow = new CustomerFlow()
        await customerFlow.customerLoginButton.click()
        await customerFlow.selectItemMethod("Harry Potter")
        await customerFlow.loginButton.click()
        expect(await customerFlow.welcomeName.getText()).toBe("Harry Potter")

    })

})
