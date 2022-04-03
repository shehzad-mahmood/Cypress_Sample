import 'cypress-wait-until';

import {Given,When, And, Then} from "cypress-cucumber-preprocessor/steps";

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

// my-reporter.js
var mocha = require('mocha');
module.exports = MyReporter;

function MyReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;

  runner.on('pass', function(test) {
    passes++;
    console.log('pass: %s', test.fullTitle());
  });

  runner.on('fail', function(test, err) {
    failures++;
    console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
  });

  runner.on('end', function() {
    console.log('end: %d/%d', passes, passes + failures);
  });
}

Given("Display login page", () => {
  cy.visit(Cypress.env('seleniummainurl'),  {
    onBeforeLoad: (win) => {
      win.performance.mark('start-loading')
    },
    onLoad: (win) => {
      win.performance.mark('end-loading')
    },
  }).its('performance').then((p) => {
    p.measure('pageLoad', 'start-loading', 'end-loading')
    const measure = p.getEntriesByName('pageLoad')[0]

    assert.isAbove(measure.duration, 1)
  })

  //cy.visit('/Spa', { timeout: 180000 });
});

When("i type in", (datatable) => {
  datatable.hashes().forEach(element => {
    cy.get('[id="Username"]').type(element.username);
    cy.get('[id="Password"]').type(element.password);

  });
});

And("i click on login button", () => {
  cy.get('[value="login"]', { timeout: 180000 }).click();
cy.wait(2000)
});

