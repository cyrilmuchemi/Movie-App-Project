import Config from './config.js';

export default class {
  constructor(type = 'comments') {
    this.url = type === 'comments' ? Config.COMMENT_API_URL : Config.INVOLVEMENT_API_URL;
  }

  async getDetails(id) {
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }
}