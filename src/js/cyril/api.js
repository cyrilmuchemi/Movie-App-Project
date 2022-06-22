export default class {
  constructor() {
    this.url = 'https://api.tvmaze.com/shows';
  }

  async getMovies() {
    console.log(this.url);
    const response = await fetch(this.url);
    return await response.json();
  }
}