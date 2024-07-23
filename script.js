// script.js

const movies = [
    {
        title: "Inception",
        poster: "./images/1.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
        details: "Detailed information about Inception..."
    },
    {
        title: "The Matrix",
        poster: "./images/2.jpg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality.",
        details: "Detailed information about The Matrix..."
    },
    {
        title: "Interstellar",
        poster: "./images/3.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        details: "Detailed information about Interstellar..."
    },
    {
        title: "Avengers: Endgame",
        poster: "./images/4.jpg",
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins.",
        details: "Detailed information about Avengers: Endgame..."
    },
    {
        title: "The Dark Knight",
        poster: "./images/5.jpg",
        description: "When the menace known as The Joker emerges, he causes chaos and havoc.",
        details: "Detailed information about The Dark Knight..."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const movieList = document.getElementById("movieList");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalMovieDetails");
    const closeBtn = document.getElementById("closeBtn");

    const displayMovies = (filteredMovies) => {
        movieList.innerHTML = "";
        filteredMovies.slice(0, 5).forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-details">
                    <h3>${movie.title}</h3>
                    <p class="movie-description">${movie.description}</p>
                </div>
            `;
            movieCard.addEventListener("click", () => {
                modalContent.innerHTML = `
                    <h2>${movie.title}</h2>
                    <p>${movie.description}</p>
                `;
                modal.style.display = "flex";
            });
            movieList.appendChild(movieCard);
        });
    };

    displayMovies(movies);

    searchBar.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies);
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
