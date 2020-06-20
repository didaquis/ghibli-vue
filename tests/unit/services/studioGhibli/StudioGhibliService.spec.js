import StudioGhibliService from '@/services/studioGhibli/StudioGhibliService'

describe('StudioGhibliService', () => {
	const baseURL = 'https://ghibliapi.herokuapp.com'
	let service
	let fetcher

	const fakeResponse = [
		{
			id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
			title: 'Castle in the Sky',
			description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
			director: 'Hayao Miyazaki',
			producer: 'Isao Takahata',
			release_date: '1986',
			rt_score: '95'
		},
		{
			id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
			title: 'Grave of the Fireflies',
			description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.',
			director: 'Isao Takahata',
			producer: 'Toru Hara',
			release_date: '1988',
			rt_score: '97'
		}
	]

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
