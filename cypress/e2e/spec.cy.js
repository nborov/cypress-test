describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('/')
  //   cy.get('button').click()
  //
  //   cy.wait(1000)
  //   cy.contains('h1', 'HELLO')
  // })
  it('should increase number', () => {
    cy.visit('/')
    cy.get('button[data-cy-btn="number"]').click()
    cy.get('p[data-cy-number]').as('jopa')
    cy.get('@jopa').should('contain', 1)
    cy.get('button[data-cy-btn="number"]').click()
    cy.get('@jopa').should('contain', 2)
  });
})