///<reference types="cypress-iframe" />
// the iframe plugin comes from https://gitlab.com/kgroat/cypress-iframe
import 'cypress-iframe'
import { skipOn } from '@cypress/skip-test'

describe('Recipe: blogs__iframes', () => {
  skipOn('firefox', () => {
    // using test retries to get occasional (rare) flake
    // https://github.com/cypress-io/cypress-example-recipes/issues/558
    it('fetches post using iframes plugin', { retries: { runMode: 2 } }, () => {
      cy.visit('index.html')
      cy.frameLoaded('[data-cy="the-frame"]')
      // after the frame has loaded, we can use "cy.iframe()"
      // to retrieve it
      cy.iframe().find('#run-button').should('have.text', 'Try it').click()
      cy.iframe().find('#result').should('include.text', '"delectus aut autem"')
    })
  })
})
