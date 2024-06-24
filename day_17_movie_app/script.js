// variables used for connecting with the API
const myApiKey = "af5e7fd345d26ed4958fa3ec67dab3b6"; // my key from tmdb
const searchApi =
	"https://api.themoviedb.org/3/search/movie?api_key=" +
	myApiKey +
	"&query='"; // &qurery=' to add our value of the search box;
const mostPopularMovies_ApiUrl =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" +
	myApiKey +
	"&page=1";
// const newMovies_ApiUrl = "";
const imagesPath = "https://image.tmdb.org/t/p/w1280";
// variables used with the html
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const movieTitle = document.querySelector(".movie_title");
const movieRate = document.querySelector(".movie_rate");
const movieOverview = document.querySelector(".movie_overview");

// get most popular movies by default:
getMovies(mostPopularMovies_ApiUrl);
async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();
	// append results
	showMovies(data.results);
}
function showMovies(movies) {
	main.innerHTML = "";
	movies.forEach((movie) => {
		const { title, overview, poster_path, vote_average } = movie;
		const movieEl = document.createElement("div");
		movieEl.classList.add("movie_card");
		movieEl.innerHTML = `
        <div class="movie_image">
        <img src="${imagesPath + poster_path}" width="100%"
          alt="movie cover">
        </div>
        <h3 class="movie_title">${title}</h3>
        <div class="movie_rate ${rateColor(
			vote_average
		)}">${vote_average.toFixed(1)}</div>
        <div class="movie_overview">
        <h3>overview</h3>
        ${overview}
        </div>`;
		function rateColor(rate) {
			if (rate >= 8) {
				return "green";
			} else if (rate >= 6) {
				return "orange";
			} else {
				return "red";
			}
		}
		main.appendChild(movieEl);
	});
}

// searching
form.addEventListener("submit", (eve) => {
	eve.preventDefault();
	const searchTerm = search.value;
	if (searchTerm && searchTerm !== "") {
		getMovies(searchApi + searchTerm);
		search.value = "";
	} else {
		window.location.reload();
	}
});
