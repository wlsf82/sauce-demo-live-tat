describe('Sauce demo', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in successfully', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()

    cy.contains('.title', 'Products').should('be.visible')
  })

  it('tries to login with a locked out user', () => {
    cy.get('[data-test=username]').type('locked_out_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()

    cy.get('.error-message-container').should('be.visible')
  })

  it('logs in successfully with a problematic user', () => {
    cy.get('[data-test=username]').type('problem_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()

    cy.contains('.title', 'Products').should('be.visible')
  })
})
