export function createCharacterCard(character) {
    // Create card
    const card = document.createElement("li");
    card.classList.add("card");
  
    // Create Image container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card__image-container");
  
    // Image
    const image = document.createElement("img");
    image.classList.add("card__image");
    image.setAttribute("src", `${character.image}`);
    image.setAttribute("alt", `${character.name}`);
  
    // Image gradient
    const imageGradient = document.createElement("div");
    imageGradient.classList.add("card__image-gradient");
  
    // DIV Card Content
    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");
  
    // Card content: card title
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = character.name;
  
    // Card content: card info
    const cardInfo = document.createElement("dl");
    cardInfo.classList.add("card__info");
  
    // Card info: title
    const cardInfoTitleStatus = document.createElement("dt");
    cardInfoTitleStatus.classList.add("card__info-title");
    cardInfoTitleStatus.textContent = "Status";
  
    const cardInfoDescriptionStatus = document.createElement("dd");
    cardInfoDescriptionStatus.classList.add("card__info-description");
    cardInfoDescriptionStatus.textContent = character.status;
  
    const cardInfoTitleType = document.createElement("dt");
    cardInfoTitleType.classList.add("card__info-title");
    cardInfoTitleType.textContent = "Type";
  
    const cardInfoDescriptionType = document.createElement("dd");
    cardInfoDescriptionType.classList.add("card__info-description");
    cardInfoDescriptionType.textContent = character.type
  
    const cardInfoTitleOccurrences = document.createElement("dt");
    cardInfoTitleOccurrences.classList.add("card__info-title");
    cardInfoTitleOccurrences.textContent = "Occurrences";
    cardInfoTitleOccurrences.textContent = character.episode.count
  
    const cardInfoDescriptionOccurrences = document.createElement("dd");
    cardInfoDescriptionOccurrences.classList.add("card__info-description");
  
    cardInfo.appendChild(cardInfoTitleStatus);
    cardInfo.appendChild(cardInfoDescriptionStatus);
    cardInfo.appendChild(cardInfoTitleType);
    cardInfo.appendChild(cardInfoDescriptionType);
    cardInfo.appendChild(cardInfoTitleOccurrences);
    cardInfo.appendChild(cardInfoDescriptionOccurrences);
  
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardInfo);
  
    imageContainer.appendChild(image);
    imageContainer.appendChild(imageGradient);
  
    card.appendChild(imageContainer);
    card.appendChild(cardContent);
  
    return card;
  }
  