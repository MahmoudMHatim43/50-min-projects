const API = "https://pokeapi.co/api/v2";

const container = document.querySelector(".container");
const colors = {
	fire: "#FDDFDF",
	grass: "#DEFDE0",
	electric: "#FCF7DE",
	water: "#DEF3FD",
	ground: "#f4e7da",
	rock: "#d5d5d4",
	fairy: "#fceaff",
	poison: "#98d7a5",
	bug: "#f8d5a3",
	dragon: "#97b3e6",
	psychic: "#eaeda1",
	flying: "#F5F5F5",
	fighting: "#E6E0D4",
	normal: "#F5F5F5",
	dark: "#707070",
	ghost: "#686868",
};

getPokemons(100);
async function getPokemons(amount) {
	for (let i = 1; i <= amount; i++) {
		await getPokemon(i);
	}
}
async function getPokemon(id) {
	const promise = await fetch(`${API}/pokemon/${id}`);
	const jsonData = await promise.json();
	createPokemonCard(jsonData);
}

function createPokemonCard(data) {
	const dataTypes = data.types.map(slot => slot.type.name);
	const card = document.createElement("div");
	card.classList.add("pokemon");
	card.innerHTML = `
    <!-- image -->
      <div class="image"
        style="background-image: url(${data.sprites.front_default});">
      </div>
      <!--  info -->
      <div class="info">
        <h4>${data.name[0].toUpperCase() + data.name.slice(1)}</h4>
        <h4>#${data.id.toString().padStart(3, "0")}</h4>
        <h4>${dataTypes[0]}</h4>
      </div>
    `;
	card.style.backgroundColor = `${colors[dataTypes[0]]}`;
	container.appendChild(card);
}
