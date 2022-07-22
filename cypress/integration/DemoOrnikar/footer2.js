describe('Footer Ornikar', function () {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => false);
    });

    it(`Navigate on the homepage Ornikar`, function () {
        if (Cypress.env('platform') === "desktop") {
            cy.visit("https://www.ornikar.com/assurance-auto");
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.visit("https://www.ornikar.com/assurance-auto");
        }
    });
    it('Check Ornikar footer', function () {
        if (Cypress.env('platform') === "desktop") {
            cy.wait(1000);
            cy.get('div[class="FooterContent_2NVmtx"]', {timeout: 5000}).should('be.visible').scrollIntoView();
            cy.get('button[id="axeptio_btn_acceptAll"]').should('be.visible').click();
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.wait(1000);
            cy.get('div[class="FooterContent_2NVmtx"]', {timeout: 5000}).should('be.visible').scrollIntoView();
            cy.get('button[id="axeptio_btn_acceptAll"]').should('be.visible').click();
        }
    });

    after(() => {
        cy.clearLocalStorage();

    });

});