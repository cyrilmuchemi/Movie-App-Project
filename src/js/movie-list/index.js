import FetchMovies from './api.js';
import InitEventListener from '../comment-pop-up/modules/initEventListener.js';
import postLikes from "./likes.js";
import showLikes from './showLikes.js';

const api = new FetchMovies();

api.getMovies().then(
  (value) => {
    const movieHome = document.getElementById('movie-list');
    movieHome.innerHTML = value.map(({ id, name, image }) => `
        <div class= "movie movie-items">
        <figure class= "Images">
        <img src=${image.medium} alt= "A movie">
        </figure>
        <div class="likeheading">
        <h2>${name}</h2>
        <i id="like-${id}" class="far likes fa-heart"></i>
        </div>
        <div class= "buttons">
        <button data-movie-id="${id}" class="open-comments">Comments</button>
        <button class="Reservation">Reservation</button>
        </div>
        </div>
        `).join('');
    InitEventListener();
    showLikes();
    postLikes()
  },
).catch((err) => err);