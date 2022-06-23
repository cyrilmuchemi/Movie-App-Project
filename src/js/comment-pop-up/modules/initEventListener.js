import API from './api.js';
import CreatePopUpUI, { commentListUI, errorCommentsGet } from './createPopUpUi.js';

const api = new API();

const openPopUpToggle = () => {
  const popUp = document.querySelector('#comments');
  popUp.classList.toggle('display-none');
};

const createCommentList = (data) => {
  api.getComments(data.id)
    .then((comments) => commentListUI(comments, data))
    .catch((err) => errorCommentsGet(err));
}

export default () => {
  const commentButtons = document.querySelectorAll('.open-comments');

  const closePopUpButton = document.querySelector('.close-pop-up');

  closePopUpButton.addEventListener('click', () => {
    openPopUpToggle();
  });

  commentButtons.forEach((item) => {
    item.addEventListener('click', (ev) => {
      const { movieId } = ev.target.dataset;

      api.getDetails(movieId)
        .then((data) => CreatePopUpUI(data))
        .then((data) => createCommentList(data))
        .catch((err) => err)
        .finally(() => openPopUpToggle());
    });
  });
};