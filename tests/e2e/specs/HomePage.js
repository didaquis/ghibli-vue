// https://docs.cypress.io/api/introduction/api.html

describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Should contain the main title and description', () => {
		cy.contains('p', 'An overview of Studio Ghibli universe')

		const regexTitle = /Studio Ghibli スタジオジブリ/
		cy.get('h1').invoke('text').should('match', regexTitle)

		cy.get('h1').should(($h1) => {
			expect($h1).to.have.length(1)
			const className = $h1[0].className
			expect(className).to.match(/is-uppercase/)
		})
	})
})
