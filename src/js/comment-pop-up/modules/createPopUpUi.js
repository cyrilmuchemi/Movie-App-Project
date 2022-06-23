import DataFactory from './moviesModel.js';
import { CountComments } from './countData.js';

const IMAGE = document.getElementById('show-img');
const TITLE = document.getElementById('show-title');
const SHOW_DETAILS = document.getElementById('show-details');
const COMMENT_LIST = document.getElementById('comment-list');
const COMMENT_COUNT = document.getElementById('comment-count');

const commentListUI = (comments, data) => new Promise((resolve, reject) => {
  if (CountComments(comments) > 0) {
    COMMENT_COUNT.innerText = `( ${CountComments(comments)} )`;
    COMMENT_LIST.innerHTML = comments.map((obj) => `<li class="comment-list-item">
        ${data.getDate(obj.creation_date)} ${obj.username}: ${obj.comment}
        </li>`).join('');
    resolve(comments);
  } else {
    reject(new Error('No Comments'));
  }
});

const errorCommentsGet = (err) => {
  COMMENT_COUNT.innerText = '( 0 )';
  COMMENT_LIST.innerHTML = `<li class="comment-list-item">${err.message}</li>`;
};

export { commentListUI, errorCommentsGet };

export default (input) => {
  const data = new DataFactory(input);

  return new Promise((resolve, reject) => {
    IMAGE.src = data.image;
    IMAGE.alt = data.title;
    TITLE.innerText = data.title;
    SHOW_DETAILS.innerHTML = data.list.map(({ name, value }) => `<li class="show-detail-list-items">
        <h3>${name}:</h3>
        <h3>${value}</h3>
    </li>`).join(' ');
    if (IMAGE.src === data.image) {
      resolve(data);
    } else {
      reject(new Error('Cannot Create Pop Up'));
    }
  });
};