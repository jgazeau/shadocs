// ***********************************************************
// https://on.cypress.io/configuration
// ***********************************************************
import './global/navbarCommands';
import './globalCommands';
// See: https://github.com/cypress-io/cypress/issues/20341
Cypress.on(
  'uncaught:exception',
  (err) => !err.message.includes('ResizeObserver')
);
