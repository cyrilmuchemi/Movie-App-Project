import InitEventListener from './modules/initEventListener.js';

const moviesList = document.getElementById('movies');
const movies = [
  {
    id: 56104,
    name: 'Twisted Fiction',
  },
  {
    id: 31783,
    name: 'Science Fiction Theatre',
  },
  {
    id: 5965,
    name: 'Food: Fact or Fiction?',
  },
];

moviesList.innerHTML = movies.map(({ id, name }) => `<li class="movie-list-item"><button data-movie-id=${id} class="open-comments">${name}</button></li>`).join(' ');

InitEventListener();