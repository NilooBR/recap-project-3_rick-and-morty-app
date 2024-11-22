import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { navButton } from "./components/NavButton/NavButton.js";
import { search } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
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
  console.log("Submit event fired!");
  const queryInput = event.target.elements.query;
  searchQuery = queryInput.value.trim(); // Avoid unnecessary spaces
  console.log("Search Query:", searchQuery);
  page = 1;
  fetchCharacterData();
});

searchBarContainer.append(searchBar);
navigation.append(prevButton,pagination,nextButton);

fetchCharacterData();

async function fetchCharacterData() {
  console.log("Fetching character data...");
  
  const cardContainer = document.querySelector('[data-js="card-container"]');
  cardContainer.innerHTML = ""; // Clear previous results to avoid duplicates
  
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );
    console.log("API Response Status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to fetch character data");
    }

    const data = await response.json();
    console.log("API Response Data:", data);

    // Handle no results
    if (!data.results || data.results.length === 0) {
      console.log("No results found for query:", searchQuery);
      cardContainer.innerHTML = "<p>No characters found.</p>"; // Show a message for no results
      return;
    }

    // Update pagination details
    maxPage = data.info.pages; // Update max pages based on the API response
    pagination.textContent = `${page} / ${maxPage}`;

    // Render character cards
    data.results.forEach((character) => {
      console.log("Rendering character:", character.name);
      const card = createCharacterCard(character); // Create card for each character
      cardContainer.append(card); // Append card to container
    });
  } catch (error) {
    console.error("Error fetching character data:", error);
    cardContainer.innerHTML = "<p>Failed to load data. Please try again later.</p>";
  }
}
