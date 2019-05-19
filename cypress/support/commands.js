// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('getExplainByLabelText', labelText =>
  cy
    .getByLabelText(labelText)
    .closest('.ant-form-item-children')
    .next())

Cypress.Commands.add('getExplainByTestId', testId =>
  cy
    .getByTestId(testId)
    .closest('.ant-form-item-children')
    .next())

Cypress.Commands.add('getFormItemByLabelText', labelText =>
  cy.getByLabelText(labelText).closest('.ant-form-item-control'))
