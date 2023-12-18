/** 
 * Create custom command to get iframes
 * Go to Support>Commands.js file> write as below for creating custom command
 * Cypress.Commands.add('getIframe', (iframeLocatorComingFromTestFile)=>{
 * return cy.get(iframeLocatorComingFromTestFile).its('0.contentDocument.body').should('be.visible').then(cy.wrap)});
 * })*/ 

describe("test suite: iframe testing using Custom Command", ()=>{

    /**Approach2: Using Custom Commands

       */

    it('iframe testing on heroku site', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
        cy.wait(1000)
        cy.get("[aria-label='Italic']").click();
       
    })
})
