describe('About page', () => {
	beforeEach(() => {
		cy.visit('/about')
	})

	it('Should contain the main title and description', () => {
		const regexTitle = /About this page/
		cy.get('h1').invoke('text').should('match', regexTitle)

		cy.contains('h2', 'This website allows you to explore the Studio Ghibli universe')
	})

	it('Should contain a link to the official website', () => {
		cy.contains('p', 'Visit the official website of Studio Ghibli')

		const regexName = /Studio Ghibli/
		cy.get('p').find('a').invoke('text').should('match', regexName)

		const regexURL = /http:\/\/www.ghibli.jp\//
		cy.get('p').find('a').and('have.attr', 'href').should('match', regexURL)
	})
})
