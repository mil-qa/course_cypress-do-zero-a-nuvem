describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('./src/index.html'))
    it('Marcar ambos checkboxes e então desmarcar o último', () => {
        cy.get('input[type="checkbox"]').check().should('be.checked').last().uncheck().should('not.be.checked')
    })
})