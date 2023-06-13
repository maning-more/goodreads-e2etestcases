function loginTestClass() {
  function login(email, password) {
    cy.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });
    cy.get('.authSwitchFlow')
      .contains('Sign In')
      .click();
    cy.wait(1000);
    cy.get('.gr-button--auth').eq(3).click();
    cy.get('#ap_email').type(email)
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click();
    cy.wait(1000);
  }
  return {
    login: login
  };
}

module.exports = loginTestClass;
