const fetchButton = document.querySelector(".js-btn");
const numberInput = document.querySelector(".js-input");
const outputBlock = document.querySelector(".js-rootOutput");

fetchButton.addEventListener("click", () => {
  if (numberInput.value) {
    fetchPokemon(numberInput.value).then((data) => createMarkup(data));
  } else {
    console.log("Nothing entered");
  }
});

function fetchPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) =>
    response.json()
  );
}

function createMarkup(data) {
  const { name, height, weight, stats } = data;
  const mapedStats = stats.map(
    ({ base_stat, stat: { name } }) => `<li>Stat: ${name} = ${base_stat}</li>`
  );
  outputBlock.innerHTML = `<ul>Name of this pokemon: ${name}
    <li>Height: ${height}</li>
    <li>Weight: ${weight}</li>
    <li><ul>Pokemon stats: ${mapedStats.join("")}</ul></li>
    </ul>`;
}

// numberInput.addEventListener("change", (e) =>
//   getUserNumber(e.currentTarget.value)
// );

// function getUserNumber(e) {
//   console.log(e);
// }
