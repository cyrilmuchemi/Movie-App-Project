const likes = async () => {
    const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tirEYA9S5jvkfP8wlY6N/likes'
    const receive = await fetch(likeURL);
    return receive.json();
};

const toggleLikes = (el) => {
    el.classList.remove('far');
    el.classList.add('fas');
}

const showLikes = async () => {
    const viewLikes = await likes();
    viewLikes.forEach((like) => {
        const likeZone = document.querySelector(`#like-${like.item_id}`);
        if(like.item_id) {
            toggleLikes(likeZone);
            likeZone.innerHTML = `<span class="like-counts">( ${like.likes} )</span>`
        }
    });
};

export default showLikes;