import fetch from './api.js';
const list = [
    {
        id: 1,
        name: "Movie 1",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/188/470746.jpg",
    },
    {
        id: 2,
        name: "Movie 1",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/188/470746.jpg",
    },
    {
        id: 3,
        name: "Movie 1",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/188/470746.jpg",
    },
    {
        id: 4,
        name: "Movie 1",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/188/470746.jpg",
    },
    {
        id: 5,
        name: "Movie 1",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/188/470746.jpg",
    },
    {
        id: 6,
        name: "Movie 1",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/188/470746.jpg",
    }
]
export default () => {
    const movieList = document.getElementById('movie-list');
    get().then(forEach(item => {
        movieList.innerHTML  = `<li class>
            div.image
            div.tile
            <button data-show-id="${item.id}" class="show-detail">Comment</button>
        </li>`
    })
    )
}