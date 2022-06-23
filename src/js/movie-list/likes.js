const postLikes = () => {
    const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tirEYA9S5jvkfP8wlY6N/likes';
    const likezone = document.querySelectorAll('.likes');
    likezone.forEach((like) => {
      like.addEventListener('click', function handler() {
        this.removeEventListener('click', handler);
        const postLike = async () => {
          like.classList.remove('far');
          like.classList.add('fas');
          const response = await fetch(likeURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              item_id: like.id.replace('like-',''),
            }),
          });
          const message = await response.text();
          if (message === 'Created') {
            if (like.childElementCount === 0) {
              like.innerHTML = `<span class="like-counts">(0)</span>`
            }
            const newDigit = like.firstElementChild;
            newDigit.textContent = `(${Number(newDigit.textContent.replace('(','').replace(')','')) + 1})`;
          }
          return message;
        };
        postLike();
      });
    });
  };
  
  export default postLikes;