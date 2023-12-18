describe("test suite: iframe testing", ()=>{

    /**Approach1:

        const iframe = cy.get(‘iframeLocator’).its(‘0.contentDocument.body’).should(‘be.visible’).then(‘cy.wrap’);
        iframe.clear().type(‘Welcome {cmd+a}’)
        its= Get a property's value on the previously yielded subject. (Here we are using it as the iframe itself contains further document wrapping the text input element)
        0 = as we have only one document under iframe, so its 0
        contentDocument.body = will enable to dig into the document part
        cy.wrap =Yield the object passed into .wrap(). If the object is a promise, yield its resolved value, wraps the frame as well as return the frame
        iframe.clear().type()  = first clear what is in the iframe and then type
        type(“Welcome {cmd+a}”) = writes welcome in Capital
        */

    it('iframe testing on heroku site', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe");
        const iframe=cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);

        cy.wait(5000)
        iframe.clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Italic']").click();
    })
})
