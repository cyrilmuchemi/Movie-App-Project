import FetchMovies from './api.js';

import InitEventListener from '../comment-pop-up/modules/initEventListener.js';

const api = new FetchMovies();

api.getMovies().then(
  (value) => {
    const movieHome = document.getElementById('movie-list');
    movieHome.innerHTML = value.map(({ id, name, image }) => `
        <div class= "movie movie-items">
        <figure class= "Images">
        <img src=${image.medium} alt= "A movie">
        </figure>
        <h2>${name}</h2>
        <div class= "buttons">
        <button data-movie-id="${id}" class="open-comments">Comments</button>
        <button class="Reservation">Reservation</button>
        </div>
        </div>
        `).join('');
    InitEventListener();
  },
).catch((err) => err);
