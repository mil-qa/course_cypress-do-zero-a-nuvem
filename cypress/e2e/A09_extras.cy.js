describe("Course: Cypress, do Zero à Nuvem - Seção 13: Avançando no uso do Cypress", () => {
  beforeEach(() => {
    cy.visit("/src/index.html");
  });
  it("Exibe e oculta as mensagens de sucesso e erro.", () => {
    cy.get(".success")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .invoke("hide")
      .should("not.be.visible");
    cy.get(".error")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .invoke("hide")
      .should("not.be.visible");
  });
  it("Preencher o campo área de texto com texto invocado", () => {
    cy.get("textarea")
      .invoke("val", "Preenchendo com invoke")
      .should("have.value", "Preenchendo com invoke");
  });
  it("Realizar uma requisição HTTP", () => {
    cy.request(
      "GET",
      "https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html"
    ).as("req");
    cy.get("@req").should((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.statusText).to.be.equal("OK");
      expect(response.body).to.include("CAC TAT");
    });
  });
  it("Realizar uma requisição HTTP 2", () => {
    cy.request(
      "GET",
      "https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html"
    )
      .as("req")
      .its("status")
      .should("be.equal", 200);
    cy.get("@req").its("statusText").should("be.equal", "OK");
    cy.get("@req").its("body").should("include", "CAC TAT");
  });
});
