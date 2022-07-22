import { Given,When,Then, And } from "@badeball/cypress-cucumber-preprocessor"; // have to import these, so that cypress can recognise cucumber keywords
import HomePage from "../../PageOject/component-ornikar/homePage";
const homePage = new HomePage();

Given("I navigate on Ornikar HomePage", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    if (Cypress.env('platform') === "desktop") {
        homePage.navigate();
    }
    if (Cypress.env('platform') === "mobile") {
        cy.viewport(414,896);
        homePage.navigate();
    }
});

Then("I check the footer", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    if (Cypress.env('platform') === "desktop") {
        homePage.checkFooter();
    }
    if (Cypress.env('platform') === "mobile") {
        cy.viewport(414,896);
        homePage.checkFooter();
    }
});

Then("I accept all cookies", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    if (Cypress.env('platform') === "desktop") {
        homePage.acceptCookie();
    }
    if (Cypress.env('platform') === "mobile") {
        cy.viewport(414,896);
        homePage.acceptCookie();
    }
});