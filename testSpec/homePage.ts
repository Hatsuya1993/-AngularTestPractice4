import { browser } from 'protractor'
import {HomePage} from '../pageObject/homePage'

describe('Testing the home page', async () => {
    
    beforeEach(async () => {
        let homePage = new HomePage()
        await homePage.website
    })

    it('Checking if the header is displayed', async () => {
        let homePage = new HomePage()
        expect(await homePage.mainHeader.isDisplayed()).toBeTruthy()
    })
    
    it('Checking if the body is displayed', async () => {
        let homePage = new HomePage()
        expect(await homePage.mainBody.isDisplayed()).toBeTruthy()
    })

    it('Checking if the cutomer login button is displayed', async () => {
        let homePage = new HomePage()
        expect(await homePage.customerLoginButton.isDisplayed()).toBeTruthy()
    })

    it('Checking if the bank manager button is displayed', async () => {
        let homePage = new HomePage()
        expect(await homePage.bankManagerButton.isDisplayed()).toBeTruthy()
    })

})

describe('Testing the button for customer and bank manager login', async () => {
  
    beforeEach(async () => {
        let homePage = new HomePage()
        await homePage.website
    })

    it('When the customer login button is clicked, url will contain customer', async () => {
        let homePage = new HomePage()
        await homePage.customerLoginButton.click()
        expect(await browser.getCurrentUrl()).toContain("customer") 
    })

    it('When the customer login button is clicked, url will contain manager', async () => {
        let homePage = new HomePage()
        await homePage.bankManagerButton.click()
        expect(await browser.getCurrentUrl()).toContain("manager") 
    })

})



