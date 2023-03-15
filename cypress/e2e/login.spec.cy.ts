describe('login spec', () => {
  it('visit login page', () => {
    cy.visit('https://sdb-learn-react.vercel.app/login')
		cy.get('[data-testid="email-input"]').should('exist')
		cy.get('[data-testid="password-input"]').should('exist')
		cy.get('[data-testid="login-button"]').should('exist')
  })

	it('visit login with email only', () => {
    cy.visit('https://sdb-learn-react.vercel.app/login')
		cy.get('[data-testid="email-input"]').type('a@a.com')
		cy.get('[data-testid="login-button"]').click()
		cy.get('[data-testid="password-error-label"]').should('exist')
  })
})

export {}
