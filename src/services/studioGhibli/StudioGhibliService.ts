import { AxiosInstance } from 'axios'

class StudioGhibliService {
  fetcher: AxiosInstance
  baseURL: string
  constructor (fetcherLibrary: AxiosInstance) {
    this.fetcher = fetcherLibrary
    this.baseURL = 'https://ghibliapi.herokuapp.com'
  }

  async getFilms () {
    try {
      const results = await this.fetcher.get(`${this.baseURL}/films`)
      return results.data
    } catch (error) {
      throw Error(error.message)
    }
  }
}

export default StudioGhibliService