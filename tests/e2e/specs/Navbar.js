describe('Nav menu of the site', () => {

	const listOfMainRoutes = [
		'/home',
		'/films',
		'/about'
	]

	before(() => {
		cy.visit('/')
	})

	context('1080p resolution', () => {
		beforeEach(() => {
			// run these tests as if in a desktop
			cy.viewport(1920, 1080)
		})

		it('Should have visible a brand link to home', () => {
			cy.get('[data-cy=navbar]').should('be.visible')
			cy.get('[data-cy=brand-link]').should('be.visible')
			cy.get('[data-cy=navbar]').find('a.burger').should('not.be.visible')
		})

		it('Should be able to navigate across the main routes of website', () => {
			cy.get('[data-cy=navbar]').find('a').each((link) => {
				const pathNameOfLink = link[0].pathname
				if (listOfMainRoutes.includes(pathNameOfLink)) {
					cy.wrap(link).click()

					cy.get('[data-cy=main-content]').should('not.be.empty')
				}
			})
			cy.get('[data-cy=brand-link]').click()
		})
	})

	context('iPhone-6 resolution', () => {
		beforeEach(() => {
			// run these tests as if in a mobile browser and ensure our responsive UI is correct
			cy.viewport('iphone-6')
		})

		it('Should have visible a brand link to home', () => {
			cy.get('[data-cy=navbar]').should('be.visible')
			cy.get('[data-cy=brand-link]').should('be.visible')
			cy.get('[data-cy=navbar]').find('a.burger').should('be.visible')
		})

		it('Should be able to navigate across the main routes of website', () => {
			cy.get('[data-cy=navbar]').find('a').each((link) => {

				cy.get('[data-cy=navbar]').find('a.burger').click()

				const pathNameOfLink = link[0].pathname
				if (listOfMainRoutes.includes(pathNameOfLink)) {
					cy.wrap(link).click()

					cy.get('[data-cy=main-content]').should('not.be.empty')
				}
			})
			cy.get('[data-cy=brand-link]').click()
		})
	})
})
