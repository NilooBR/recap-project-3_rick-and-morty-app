import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
// import { renderElement } from "./utils/utils.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { navButton } from "./components/NavButton/NavButton.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const root = document.getElementById("root")
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

const prevButton = navButton("previous", () => {
  if (page <= 1) {
    return null;
  }
   page--;
   fetchCharacterData();
});

const nextButton = navButton("next", () => {
  if (page >= maxPage) {
    return null;
  }
  page++;
  fetchCharacterData();
});

const pagination = navPagination();

navigation.append(prevButton,pagination,nextButton);



async function fetchCharacterData() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const data = await response.json();
  console.log(data);
  data.results.forEach((character) => {
    const card = createCharacterCard(character);
    root.appendChild(card);
    pagination.textContent = `${page} / ${maxPage}`
    
  });
  return data;
}
fetchCharacterData();