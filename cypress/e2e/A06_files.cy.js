describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => cy.visit('./src/index.html'))
    it('Selecionar um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/example.json')
            .should((input) => {
                expect(input[0].files[0].name).to.be.equal('example.json')
            })
    })
    it('Selecionar um arquivo simulando drag\'n\'drop', () => {
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
            .should((input) => {
                expect(input[0].files[0].name).to.be.equal('example.json')
            })
    })
    it('Selecionar um arquivo utilizando uma fixture para a qual foi dada umn alias', () => {
        cy.fixture('example.json').as('fixtureTest')
        cy.get('input[type="file"]')
            .selectFile('@fixtureTest')
            .should((input) => {
                expect(input[0].files[0].name).to.be.equal('example.json')
            })
    })
})