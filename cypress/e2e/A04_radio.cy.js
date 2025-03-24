describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('./src/index.html'))
    it('Marcar o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
    })
    it.only('Marcar todos os tipos de atendimento', () => {
        cy.get('input[type="radio"]')
          .each((service) => {
            cy.wrap(service).check().should('be.checked')
          })
    })
})