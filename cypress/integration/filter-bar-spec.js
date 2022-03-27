describe("Test file", () => {
  it("Should be able to say true is equal to true", () => {
    cy.visit("http://localhost:3000/");
    expect(true).to.equal(true);
  });
});
