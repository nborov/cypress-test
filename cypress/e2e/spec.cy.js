describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('button').click()

    cy.wait(1000)
    cy.contains('h1', 'HELLO')
  })
})