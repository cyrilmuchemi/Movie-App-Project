export default () => {
  const commentButtons = document.querySelectorAll('.open-comments');

  commentButtons.forEach((item) => {
    item.addEventListener('click', (ev) => {
      const { movieId } = ev.target.dataset;
      console.log(ev.target.dataset);
      console.log(movieId);
    });
  });
};