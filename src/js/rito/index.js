import InitEventListener from './modules/initEventListener.js';

const moviesList = document.getElementById('movies');
const movies = [
  {
    id: 45117,
    name: 'Science!',
  },
  {
    id: 4363,
    name: 'Forbidden Science',
  },
  {
    id: 3826,
    name: 'Weird Science',
  },
];

moviesList.innerHTML = movies.map(({ id, name }) => `<li class="movie-list-item"><button data-movie-id=${id} class="open-comments">${name}</button></li>`).join(' ');


InitEventListener();