describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => cy.visit("./src/index.html"));
  it("Verificar que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.get("a[href]").should("have.attr", "target", "_blank");
  });
  it("Acessar a página de política de privacidade removendo o target e então clicando no link", () => {
    cy.get("a[href]").invoke("removeAttr", "target").click();
    cy.title().should(
      "be.equal",
      "Central de Atendimento ao Cliente TAT - Política de Privacidade"
    );
  });
  it("Testar a página de política de privacidade de forma independente", () => {
    cy.visit("./src/privacy.html");
    cy.get("h1")
      .contains("CAC TAT - Política de Privacidade")
      .should("be.visible");
  });
});
