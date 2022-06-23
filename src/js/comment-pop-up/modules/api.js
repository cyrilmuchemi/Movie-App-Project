import Config from './config.js';

export default class {
  constructor() {
    this.showUrl = Config.COMMENT_API_URL;
    this.commentsUrl = Config.INVOLVEMENT_API_URL;
    this.addCommentSettings = Config.INVOLVEMENT_API_SETTINGS;
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

  async addComment(inputs) {
    this.addCommentSettings.body = JSON.stringify(inputs);
    const response = await fetch(this.commentsUrl, this.addCommentSettings);
    if (!response.ok) {
      throw new Error('Error Adding Comments');
    }
    return response.text();
  }
}