describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Should contain the main title and description', () => {
		cy.get('[data-cy=website-description]').should('contain', 'An overview of Studio Ghibli universe')

		const regexTitle = /Studio Ghibli スタジオジブリ/
		cy.get('[data-cy=website-title]').invoke('text').should('match', regexTitle)

		cy.get('[data-cy=website-title]').should((title) => {
			expect(title).to.have.length(1)
			const className = title[0].className
			expect(className).to.match(/is-uppercase/)
		})
	})
})
