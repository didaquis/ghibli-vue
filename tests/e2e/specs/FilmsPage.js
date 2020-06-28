describe('Films page (stub response from API)', () => {
	before(() => {
		cy.server()

		cy.fixture('filmsData.json').as('films')

		cy.route('GET', '**/films', '@films')

		cy.visit('/films')
	})

	describe('For every film', () => {
		it('Should contain the title of the films', () => {
			const expectedFilmTitles = ['Castle in the Sky', 'Grave of the Fireflies']

			cy.get('[data-cy=film-card-title]').each(($el) => {
				const text = $el.text().trim()
				expect(text).to.be.oneOf(expectedFilmTitles)
			})

			cy.get('[data-cy=film-card-title]').should('have.length', 2)
		})

		it('Should contain the description of the films', () => {
			const regexOfValidDescriptions = new RegExp(/The orphan Sheeta inherited a mysterious crystal|In the latter part of World War II/)

			cy.get('[data-cy=film-card-description]').each(($el) => {
				const text = $el.text().trim()
				expect(text).to.match(regexOfValidDescriptions)
			})

			cy.get('[data-cy=film-card-description]').should('have.length', 2)
		})

		it('Should contain the tag with score', () => {
			const expectedScore = ['Rotten Tomato score 95', 'Rotten Tomato score 97']

			cy.get('[data-cy=film-card-score]').each(($el) => {
				const text = $el.text().trim()
				expect(text).to.be.oneOf(expectedScore)
			})

			cy.get('[data-cy=film-card-score]').should('have.length', 2)
		})

		it('Should contain the year and director', () => {
			const expectedFooterText = ['Year: 1986 Director: Hayao Miyazaki', 'Year: 1988 Director: Isao Takahata']

			cy.get('[data-cy=film-card-footer]').each(($el) => {
				const text = $el.text().trim()
				expect(text).to.be.oneOf(expectedFooterText)
			})

			cy.get('[data-cy=film-card-footer]').should('have.length', 2)
		})
	})

	describe('Notification', () => {
		it('Should display a button to open notification', () => {
			cy.get('[data-cy=notification-button]').should('be.visible')
		})

		it('Should be hidden when page load', () => {
			cy.get('[data-cy=notification]').should('not.be.visible')
		})

		it('Should display if button is used', () => {
			cy.get('[data-cy=notification-button]').click()
			cy.get('[data-cy=notification]').should('be.visible')
		})

		it('Should close if user press "delete" button', () => {
			cy.get('[data-cy=notification]').should('be.visible')
			cy.get('[data-cy=notification]').find('button').click()
			cy.get('[data-cy=notification]').should('not.be.visible')
		})
	})
})
