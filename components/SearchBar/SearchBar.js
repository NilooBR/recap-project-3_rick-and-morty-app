export function search(submit) {
    const form = document.createElement("form");
    form.classList.add("search-bar");
  
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "query");
    input.setAttribute("placeholder", "search characters");
    input.classList.add("search-bar__input");

    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.classList.add("search-bar__button");

    const imgElement = document.createElement("img");
    imgElement.classList.add("search-bar__icon");
    imgElement.setAttribute("src", "assets/magnifying-glass.png");
    imgElement.setAttribute("alt","");
  
    button.appendChild(imgElement);
  
    form.append(input, button);
  
    form.addEventListener("submit", submit);
  
    return form;
  }
  