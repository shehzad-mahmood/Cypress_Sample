import 'cypress-wait-until';
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";

Given("User has already been loggedin", () => {
  cy.contains("Sales Navigator", { timeout: 180000 }).should('be.visible');

});

When("User clicks on logout button", () => {
  cy.get('a[href*="#/logout"]').click()

});