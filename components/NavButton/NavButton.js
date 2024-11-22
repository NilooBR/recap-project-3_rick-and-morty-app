export function navButton(buttonLabel, click) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = buttonLabel;
  button.addEventListener("click", click);

  return button;
}
