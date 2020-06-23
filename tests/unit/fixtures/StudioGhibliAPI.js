export const filmsData = [
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

export const peopleData = [
	{
		id: '40c005ce-3725-4f15-8409-3e1b1b14b583',
		name: 'Colonel Muska',
		gender: 'Male',
		age: '33',
		eye_color: 'Grey',
		hair_color: 'Brown',
		films: ['https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe'
		],
		species: 'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
		url: 'https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583'
	},
	{
		id: '6523068d-f5a9-4150-bf5b-76abe6fb42c3',
		name: 'Porco Rosso',
		gender: 'Male',
		age: '47',
		eye_color: 'Black',
		hair_color: 'Brown',
		films: ['https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8'
		],
		species: 'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
		url: 'https://ghibliapi.herokuapp.com/people/6523068d-f5a9-4150-bf5b-76abe6fb42c3'
	},
	{
		id: 'a10f64f3-e0b6-4a94-bf30-87ad8bc51607',
		name: 'Sosuke',
		gender: 'Male',
		age: '5',
		eye_color: 'Brown',
		hair_color: 'Brown',
		films: ['https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786'
		],
		species: 'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2',
		url: 'https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607'
	}
]
