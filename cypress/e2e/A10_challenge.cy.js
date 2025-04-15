describe("Course: Cypress, do Zero à Nuvem - Seção 14: Desafio final", () => {
  beforeEach(() => {
    cy.visit("/src/index.html");
  });
  it("Eu acho que eu vi um catinho", () => {
    cy.get("#cat").should("not.be.visible").invoke("show").should("be.visible");
  });
});
