import NotFoundImg from '../images/not-found.svg';

export function NotFound() {
  const notFoundContainer = document.createElement("div");
  notFoundContainer.classList.add("not-found-container");

  const notFound = document.createElement("h2");
  notFound.textContent = "Oops, we didn't find anything!";

  const imgNotFound = document.createElement("img");
  imgNotFound.src = NotFoundImg;
  imgNotFound.alt = "Not Found";

  notFoundContainer.appendChild(imgNotFound);
  notFoundContainer.appendChild(notFound);
  return notFoundContainer
}