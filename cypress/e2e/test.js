import meta from "../../gatsby-config.js";

describe("create-react-app default app", () => {
  it("shows the default home page of devpendant apps", () => {
    cy.visit("/")
      .url()
      .should("eq", `${Cypress.config().baseUrl}`);
  });

  it("shows the Banner of devpendant apps", () => {
    cy.contains(meta.siteMetadata.title).should("be.visible");
    cy.contains(meta.siteMetadata.title);
    cy.get("h1").should("contain", meta.siteMetadata.title);
  });

  it("shows the title of devpendant apps", () => {
    cy.title().should("contain", meta.siteMetadata.title);
  });

  it("navigating to page-2", () => {
    cy.visit("page-2");
  });

  it("navigating back to home", () => {
    cy.visit("/");
  });
});
