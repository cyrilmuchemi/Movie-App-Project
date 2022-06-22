import fetchMovies from "./api.js";

const api = new fetchMovies();

api.getMovies().then(
    (value) => {
        
        let movieHome = document.getElementById('movie-list');
        movieHome.innerHTML = value.map(({id, name, image}) => {
            return `
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
        `    
        }).join("");
    }
).catch(err => console.log(err));
