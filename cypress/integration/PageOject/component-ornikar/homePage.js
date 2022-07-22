class HomePage {
    navigate() {
        cy.visit('https://www.ornikar.com/assurance-auto')
    }

    checkFooter() {
        cy.get('div[class="FooterContent_2NVmtx"]', {timeout: 5000}).should('be.visible').scrollIntoView();

    }

    acceptCookie() {
        cy.get('button[id="axeptio_btn_acceptAll"]').should('be.visible').click();

    }

    checkHeader() {
        cy.get('div[class="react-header_Content_1X_9b"]', {timeout: 5000}).should('be.visible').scrollIntoView();
    }
}
export default HomePage