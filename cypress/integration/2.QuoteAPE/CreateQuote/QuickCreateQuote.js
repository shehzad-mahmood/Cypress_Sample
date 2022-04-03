import "cypress-wait-until";
import {Given,When, And, Then} from "cypress-cucumber-preprocessor/steps";

import QuickCreateQuote from "./QuickCreateQuote.PageObjects";
before(() => {
  cy.clearLocalStorageSnapshot();
});

beforeEach(() => {
  
  Cypress.Cookies.preserveOnce('OidcAuth');
  cy.restoreLocalStorage();
  
});

afterEach(() => {
  cy.saveLocalStorage();
});

const cq = new QuickCreateQuote()

Given("Verify Sales Navigator is opened", () => {
  const path = 'unauthorized';

  cy.url().then(($url) => {
    
         cy.log($url);
      
      if($url.includes(path)) {
          cy.log("Yes")
          cy.visit(Cypress.env('seleniummainurl') +'/Spa/');
          
      } else  {
          cy.log("No")
        }
  })
});

When("Open Quick Create Wizard", () => {
  cq.getCreateNew().click({ force: true });
});

And("Select Create Quote on wizard", () => {
  cq.getAdvanceDeal().click({ force: true })
});

And(
  "Select Customer, Opportunity, Contact & Quote on create quote pop up",
  () => {
    // Type customer name
    cq.getCustomerNameTextBox().type("CypressCustomer");

    // Customer Cypress Customer from search resutls
    cq.getCustomerNameFromList().contains("CypressCustomer").click();

    // Type Opportunity name
    cq.getOpportunityNameTextBox().type("Cypress Opportunity");

    //Select Opportunity name from search list
    cq.getOpportunityNameFromList().contains("Cypress Opportunity").click();

    //Type customer contact name
    cq.getContactTextBox().type("Cypress Contract");

    //Type quote name
    cq.getQuoteNameTextBox().type("Cypress Test Quote");

    //Type Quote description
    cq.getQuoteDescriptionTextArea().type("this is test Cypress quote");
  }
);

And("i click Next to show Solution types", () => {
  // Click on Next button on Wizard
  cq.getQuoteWizardNextButton().click();
});

And("Select the standard solution", () => {
  // select standard solution on wizard
  cq.getStandardSolutionTypeOnWizard().click();
});

And("Click the finish button to add a new quote", () => {
  cy.get("body").then((body) => {
    cy.log(
      "quote metrics length before: " +
      body.find("label:contains(Quote Metrics)").length
    );
  });
  cq.getQuoteWizardNextButton().click();
});
