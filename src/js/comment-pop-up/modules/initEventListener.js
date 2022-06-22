import API from './api.js';
import CreatePopUpUI from './createPopUpUi.js';

const openPopUpToggle = () => {
  const popUp = document.querySelector('#comments');
  popUp.classList.toggle('display-none');
};

export default () => {
  const commentButtons = document.querySelectorAll('.open-comments');

  const closePopUpButton = document.querySelector('.close-pop-up');

  closePopUpButton.addEventListener('click', () => {
    openPopUpToggle();
  });

  commentButtons.forEach((item) => {
    item.addEventListener('click', (ev) => {
      const api = new API();
      const { movieId } = ev.target.dataset;
      api.getDetails(movieId)
        .then((data) => {
          CreatePopUpUI(data);
          openPopUpToggle();
        })
        .catch((err) => err);
    });
  });
};