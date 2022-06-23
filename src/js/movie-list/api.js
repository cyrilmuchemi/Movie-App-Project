export default class {
  constructor() {
    this.url = 'https://api.tvmaze.com/shows';
  }

  async getMovies() {
    const response = await fetch(this.url);
    return await response.json();
  }
}