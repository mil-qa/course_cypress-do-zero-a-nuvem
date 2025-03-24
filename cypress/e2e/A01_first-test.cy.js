describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('/src/index.html'))
  
    // Seção 2: Seu primeiro teste escrito com Cypress
    it('Verificar título da aplicação.', () => {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
  })