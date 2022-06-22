
const openPopUpToggle = () => {
  const popUp = document.querySelector("#comments");
  popUp.classList.toggle('display-none');
}

export default () => {
  const commentButtons = document.querySelectorAll('.open-comments');

  const closePopUpButton = document.querySelector('.close-pop-up');

  closePopUpButton.addEventListener('click', () => {
    openPopUpToggle();
  })

  commentButtons.forEach((item) => {
    item.addEventListener('click', (ev) => {
      const { movieId } = ev.target.dataset;
      openPopUpToggle();
      console.log(ev.target.dataset);
      console.log(movieId);
    });
  });
};