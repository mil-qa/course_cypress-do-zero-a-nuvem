Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Ciclano',
    lastName: 'von Beltranois',
    email: 'cicl@no.it',
    feedback: 'This isn\'t a feedback!'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('input[name="lastName"]').type(data.lastName)
    cy.get('input[type="email"]').type(data.email)
    cy.get('textarea').type(data.feedback, { delay: 10})
    cy.get('.button').click()
})