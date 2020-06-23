describe('Films page (stub response from API)', () => {
	before(() => {
		cy.server()

		cy.fixture('filmsData.json').as('films')

		cy.route('GET', '**/films', '@films')

		cy.visit('/films')
	})

	it('Should contain the title of the films', () => {
		const expectedFilmTitles = ['Castle in the Sky', 'Grave of the Fireflies']

		cy.get('[data-cy=main-content]').find('li').each(($el) => {
			const text = $el.text().trim()
			expect(text).to.be.oneOf(expectedFilmTitles)
		})
	})
})
