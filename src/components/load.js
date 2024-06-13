export function Load() {
  const loadContainer = document.createElement("div");
  const load = document.createElement("p");
  load.classList.add("load");
  load.textContent = "Loading...";
  loadContainer.appendChild(load);
  loadContainer.classList.add("load-container");
  return loadContainer
}
