import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { renderElement } from "./utils/utils.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { navButton } from "./components/NavButton/NavButton.js";
import { search } from "./components/SearchBar/SearchBar.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

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

const searchBar = search((event) => {
  event.preventDefault();
  const queryInput = event.target.elements.query;
  searchQuery = queryInput.value.trim();
  page = 1;
  fetchCharacterData();
});

searchBarContainer.append(searchBar);
navigation.append(prevButton,pagination,nextButton);

fetchCharacterData();

async function fetchCharacterData() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch character data");
    }
    const data = await response.json();
    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      renderElement(card);
    });
    pagination.textContent = `${page} / ${maxPage}`;
    maxPage = data.info.pages;
  } catch (error) {
    console.error("Error fetching character data:", error);
  }
}
