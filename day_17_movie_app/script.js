const API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=af5e7fd345d26ed4958fa3ec67dab3b6&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
	"https://api.themoviedb.org/3/search/movie?api_key=af5e7fd345d26ed4958fa3ec67dab3b6&query='";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);
async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();
	showMovies(data.results);
	console.log(data.results);
}

function showMovies(movies) {
	main.innerHTML = "";
	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");
		movieEl.innerHTML = `<div class="movie">
      <div class="movie_img">
        <img
          src= "${IMG_PATH + poster_path}"
          alt="${title}">
      </div>
      <div class="movie_info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="movie_overview">
        <h3>Overview</h3>
        <span class="overview">
          ${overview}
        </span>
      </div>
    </div>`;

		main.appendChild(movieEl);
	});
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return "green";
	} else if (vote >= 5) {
		return "orange";
	} else {
		return "red";
	}
}

form.addEventListener("submit", (eve) => {
	eve.preventDefault();
	const searchTerm = search.value;
	if (searchTerm && searchTerm !== "") {
		getMovies(SEARCH_API + searchTerm);
		search.value = "";
	} else {
		window.location.reload();
	}
});
