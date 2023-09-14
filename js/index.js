const fetchButton = document.querySelector(".js-btn");
const numberInput = document.querySelector(".js-input");
const outputBlock = document.querySelector(".js-rootOutput");

numberInput.addEventListener("change", (e) =>
  getUserNumber(e.currentTarget.value)
);
fetchButton.addEventListener("click", () => {
  if (numberInput.value) {
    console.log(fetchPokemon(1));
  } else {
    console.log("Nothing");
  }
});
// response.then((data) => console.log(data));

function fetchPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => data);
}

function getUserNumber(e) {
  console.log(e);
}
