describe('Title of document', () => {
	it('Should be the correct title', () => {
		const expectedTitleOfDocument = 'Studio Ghibli'
		cy.visit('/').title().should('eq', expectedTitleOfDocument)
	})
})
