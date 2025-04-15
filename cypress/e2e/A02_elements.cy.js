describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => cy.visit("/src/index.html"));

  // Seção 3: Localizando, digitando e clicando em elementos
  Cypress._.times(3, () => {
    it("Preencher os campos obrigatórios e enviar o formulário.", () => {
      cy.get("#firstName").type("Pafuncio");
      cy.get('input[name="lastName"]').type("Fulanovich");
      cy.get('input[type="email"]').type("pafuncio@terra.com");
      cy.get("textarea").type("This is a feedback.", { delay: 10 });
      cy.clock();
      cy.get(".button").click();
      cy.get(".success").should("be.visible");
      cy.tick(3000);
      cy.get(".success").should("not.be.visible");
    });
  });
  it("Exibir mensagem de erro ao submeter formulário com email inválido", () => {
    cy.get("#firstName").type("Pafuncio");
    cy.get('input[name="lastName"]').type("Fulanovich");
    cy.get('input[type="email"]').type("pafuncio");
    cy.get("textarea").type("This is a feedback.", { delay: 0 });
    cy.get(".button").click();

    cy.get(".error").should("be.visible");
  });
  it("Verificar que só é possível digitar caracteres numéricos no campo telefone", () => {
    cy.get('input[name="phone"][type="number"]').type("abcxyz");
    cy.get("#phone").should("be.empty");
  });
  it("Exibir mensagem de erro quando o telefone se torna obrigatório mas não é preenchido", () => {
    cy.get("#firstName").type("Pafuncio");
    cy.get('input[name="lastName"]').type("Fulanovich");
    cy.get('input[type="email"]').type("pafuncio");
    cy.get("textarea").type("This is a feedback.", { delay: 0 });
    cy.get('input[type="checkbox"][name="phone"]').click();
    cy.get(".button").click();

    cy.get(".error").should("be.visible");
  });
  it("Preencher e limpar os campos digitáveis.", () => {
    cy.get("#firstName")
      .type("Pafuncio")
      .should("have.value", "Pafuncio")
      .clear()
      .should("have.value", "");
    cy.get('input[name="lastName"]')
      .type("Fulanovich")
      .should("have.value", "Fulanovich")
      .clear()
      .should("have.value", "");
    cy.get('input[type="email"]')
      .type("pafuncio@terra.com")
      .should("have.value", "pafuncio@terra.com")
      .clear()
      .should("have.value", "");
    cy.get("textarea")
      .type("This is a feedback.", { delay: 0 })
      .should("have.value", "This is a feedback.")
      .clear()
      .should("have.value", "");
    cy.get('input[name="phone"][type="number"]')
      .type("1140028922")
      .should("have.value", "1140028922")
      .clear()
      .should("have.value", "");
  });
  it("Exibir mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.", () => {
    cy.get(".button").click();
    cy.get(".error").should("be.visible");
  });
  it("Enviar formulário com sucesso usando Custom Commands", () => {
    const data = {
      firstName: "Pafuncio",
      lastName: "Fulanovich",
      email: "pafuncio@terra.com",
      feedback: "This is a feedback.",
    };

    cy.fillMandatoryFieldsAndSubmit(data);

    cy.get(".success").should("be.visible");
  });
  it("Preencher todos os campos obrigatórios e enviar o formulário, utilizando contains para achar o botão.", () => {
    cy.get("#firstName").type("Pafuncio");
    cy.get('input[name="lastName"]').type("Fulanovich");
    cy.get('input[type="email"]').type("pafuncio@terra.com");
    cy.get("textarea").type("This is a feedback.", { delay: 10 });
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");
  });
});
