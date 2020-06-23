import StudioGhibliService from '@/services/studioGhibli/StudioGhibliService'

import { filmsData, peopleData } from '../../fixtures/StudioGhibliAPI'

describe('StudioGhibliService', () => {
	const baseURL = 'https://ghibliapi.herokuapp.com'
	let service
	let fetcher

	const fakeFilmsResponse = filmsData
	const fakePeopleResponse = peopleData

	describe('getFilms', () => {
		beforeAll(() => {
			fetcher = {
				get: jest.fn().mockResolvedValueOnce({
					data: fakeFilmsResponse
				}).mockRejectedValueOnce(new Error())
			}
		})

		beforeEach(() => {
			service = new StudioGhibliService(fetcher)
		})

		it('should return a list of films', async () => {
			const response = await service.getFilms()

			expect(response).toEqual(fakeFilmsResponse)
			expect(fetcher.get).toHaveBeenCalledWith(`${baseURL}/films`)
		})
	})

	describe('getPeople', () => {
		beforeAll(() => {
			fetcher = {
				get: jest.fn().mockResolvedValueOnce({
					data: fakePeopleResponse
				}).mockRejectedValueOnce(new Error())
			}
		})

		beforeEach(() => {
			service = new StudioGhibliService(fetcher)
		})

		it('should return a list of films', async () => {
			const response = await service.getPeople()

			expect(response).toEqual(fakePeopleResponse)
			expect(fetcher.get).toHaveBeenCalledWith(`${baseURL}/people`)
		})
	})
})
