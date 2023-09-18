const fetchButton = document.querySelector(".js-btn");
const numberInput = document.querySelector(".js-input");
const outputBlock = document.querySelector(".js-rootOutput");
function fetchPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => response.json());
}
if (fetchButton) {
    fetchButton.addEventListener("click", () => {
        if (numberInput && numberInput.value) {
            fetchPokemon(numberInput.value).then((data) => createMarkup(data));
        }
        else {
            alert("Nothing entered");
        }
    });
}
function createMarkup(data) {
    const { name, height, weight, stats } = data;
    const mapedStats = stats.map(({ base_stat, stat: { name } }) => `<li>Stat: ${name} = ${base_stat}</li>`);
    if (outputBlock) {
        outputBlock.innerHTML = `<ul>Name of this pokemon: ${name}
    <li>Height: ${height}</li>
    <li>Weight: ${weight}</li>
    <li><ul>Pokemon stats: ${mapedStats.join("")}</ul></li>
    </ul>`;
    }
}
//# sourceMappingURL=index.js.map