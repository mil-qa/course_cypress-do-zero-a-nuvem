describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => cy.visit("./src/index.html"));
  it("Simula dispositivo com 410wd e 860hg", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
});
