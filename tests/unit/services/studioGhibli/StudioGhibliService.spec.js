import StudioGhibliService from '@/services/studioGhibli/StudioGhibliService'

import { filmsData } from '../../fixtures/StudioGhibliAPI'

describe('StudioGhibliService', () => {
	const baseURL = 'https://ghibliapi.herokuapp.com'
	let service
	let fetcher

	const fakeResponse = filmsData

	beforeAll(() => {
		fetcher = {
			get: jest.fn().mockResolvedValueOnce({
				data: fakeResponse
			}).mockRejectedValueOnce(new Error())
		}
	})

	beforeEach(() => {
		service = new StudioGhibliService(fetcher)
	})

	it('should return a list of films', async () => {
		const response = await service.getFilms()

		expect(response).toEqual(fakeResponse)
		expect(fetcher.get).toHaveBeenCalledWith(`${baseURL}/films`)
	})
})
