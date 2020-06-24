describe('Timeline page', () => {
	beforeEach(() => {
		cy.visit('/timeline')
	})

	it('Should contain the main title and subtitle', () => {
		const regexTitle = /The timeline of Studio Ghibli/
		cy.get('[data-cy=timeline-title]').invoke('text').should('match', regexTitle)

		cy.get('[data-cy=timeline-subtitle]').should('contain', 'The most relevant moments')
	})

	it('Should have a timeline with data', () => {
		cy.get('[data-cy=timeline-graph]').should('not.be.empty')

		const listOfYears = /1984|1985|1988|1997|2001|2020/
		cy.get('[data-cy=timeline-graph]').invoke('text').should('match', listOfYears)

		const listOfFilms = /Nausicaä of the Valley of the Wind|Grave of the Fireflies|My Neighbor Totoro|Princess Mononoke|Spirited Away|Earwig and the Witch/
		cy.get('[data-cy=timeline-graph]').invoke('text').should('match', listOfFilms)

		const listOfKeywords = /The studio is founded by Hayao Miyazaki, Isao Takahata and Toshio Suzuki|The Ghibli Museum opened in Tokyo/
		cy.get('[data-cy=timeline-graph]').invoke('text').should('match', listOfKeywords)
	})
})
