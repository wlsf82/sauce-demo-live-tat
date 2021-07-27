describe('Sauce demo', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in successfully', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()

    cy.contains('.title', 'Products').should('be.visible')
  })
})
