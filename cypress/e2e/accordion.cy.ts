import {accordions} from "../fixtures/mockResolvers";

describe('template spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'))
  })
  it('expands accordion and shows details', () => {
    accordions.forEach(accordion => {
      cy.get(`[data-cy="accordion-${accordion._id}"]`).should('have.text', accordion.title)
      accordion.accordionItemsCollection.items.forEach(accordionItem => {
        cy.get(`[data-cy="accordion-item-details-${accordionItem._id}"]`).should('not.be.visible')
        cy.get(`[data-cy="accordion-item-title-${accordionItem._id}"]`).should('have.text', accordionItem.name)
        cy.get(`[data-cy="accordion-item-button-${accordionItem._id}"]`).click()
        cy.get(`[data-cy="accordion-item-details-${accordionItem._id}"]`).should('have.text', accordionItem.text)
      })
    })
  })
})