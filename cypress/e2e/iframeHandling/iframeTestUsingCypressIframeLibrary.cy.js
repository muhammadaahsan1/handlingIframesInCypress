import 'cypress-iframe'

/** 
 * Test iframes using cypress iframe library
 * Terminal > npm install -D cypress-iframe
 * Import it > import 'cypress-iframe' on top of your test file
 * */ 

describe("test suite: iframe testing using cypress Iframe library", ()=>{

    /**Approach2: Using Custom Commands

       */

    it('appraoch3 - by using cypress-iframe plugin', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr'); // TO load the iframe
        //Once loaded one can perform operations on the iframe
        cy.iframe('#mce_0_ifr').clear().wait(1000).type("Welcome {ctrl+a}");
        cy.get("[aria-label='Italic']").click();
       
    })
})
