export function search(submit) {
  const form = document.createElement("form");
  form.classList.add("search-bar");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "query");
  input.setAttribute("placeholder", "Search characters...");
  input.classList.add("search-bar__input");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Search";
  button.classList.add("search-bar__button");

  form.append(input, button);

  form.addEventListener("submit", submit);

  return form;
}
