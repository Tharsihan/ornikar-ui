import { Given,When,Then, And } from "@badeball/cypress-cucumber-preprocessor"; // have to import these, so that cypress can recognise cucumber keywords
import HomePage from "../../PageOject/component-ornikar/homePage";
const homePage = new HomePage();

Then("I check the header", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    if (Cypress.env('platform') === "desktop") {
        homePage.checkHeader();
    }
    if (Cypress.env('platform') === "mobile") {
        cy.viewport(414,896);
        homePage.checkFooter();
    }
});

