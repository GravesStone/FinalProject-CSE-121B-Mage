//Font Properties
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//LowerCase
function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  
//Fetch the Pokemon API
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      //PokemonBox
      document.querySelector(".pokemonBox").innerHTML = `
      
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
        <p>Power Level: ${data.base_experience}</p>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h2>Sorry your Pokemon could not find! 😞</h2>
      `;
      console.log(err);
    });

  e.preventDefault();
}
//Function  for search button
document.querySelector("#search").addEventListener("click", getPokemon);