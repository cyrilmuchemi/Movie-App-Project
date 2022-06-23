import Config from './config.js';

export default class {
  constructor() {
    this.showUrl = Config.COMMENT_API_URL;
    this.commentsUrl = Config.INVOLVEMENT_API_URL;
  }

  async getDetails(id) {
    const response = await fetch(`${this.showUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Cannot Fetch Movie Details: ${response.status}`);
    }
    return response.json();
  }

  async getComments(id) {
    const response = await fetch(`${this.commentsUrl}?item_id=${id}`);
    if (!response.ok) {
      throw new Error('No Comments Found');
    }
    return response.json();
  }
}