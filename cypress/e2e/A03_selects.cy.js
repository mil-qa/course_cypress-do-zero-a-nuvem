describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('/src/index.html'))

    // Seção 4: Selecionando opções em campos de seleção suspensa
    it('Selecionar o produto YouTube por seu Texto', () => {
      cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })
    it('Selecionar o produto Mentoria por seu valor', () => {
      cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })
    it('Selecionar o produto Blog por seu índice', () => {
      cy.get('#product').select(1).should('have.value', 'blog')
    })
  })