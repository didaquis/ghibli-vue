describe('About page', () => {
	beforeEach(() => {
		cy.visit('/about')
	})

	it('Should contain the main title and subtitle', () => {
		const regexTitle = /About this page/
		cy.get('[data-cy=about-title]').invoke('text').should('match', regexTitle)

		cy.get('[data-cy=about-subtitle]').should('contain', 'This website allows you to explore the Studio Ghibli universe')
	})

	it('Should contain the secondary title and description', () => {
		const regexTitle = /About Studio Ghibli/
		cy.get('[data-cy=about-secondary-title]').invoke('text').should('match', regexTitle)

		cy.get('[data-cy=blockquote-description]').should('contain', 'Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio headquartered in Koganei, Tokyo.')
	})

	it('Should contain a link to the official website', () => {
		cy.get('[data-cy=cta-link-text]').should('contain', 'Visit the official website of Studio Ghibli')

		const regexName = /Studio Ghibli/
		cy.get('[data-cy=cta-link-text]').find('a').invoke('text').should('match', regexName)

		const regexURL = /http:\/\/www.ghibli.jp\//
		cy.get('[data-cy=cta-link-text]').find('a').and('have.attr', 'href').should('match', regexURL)
	})
})
