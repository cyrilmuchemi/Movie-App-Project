const postLikes = () => {
    const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tirEYA9S5jvkfP8wlY6N/likes'
    const likezone = document.querySelectorAll('.likes');
    likezone.forEach((like) => {
        like.addEventListener('click', () => {
            const postLike = async () => {
                const newDigit = like.nextElementSibling;
                const likeIcon = newDigit.previousElementSibling;
                likeIcon.classList.remove('far');
                likeIcon.classList.add('fas');
                const heart = newDigit.id;
                newDigit.textContent = Number(newDigit.textContent) + 1;

                const response = await fetch(likeURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        item_id: heart,
                    }),
                });
                const message = await response.text();
                return message;
            };
            postLike();
        });
    });
};

export default postLikes;