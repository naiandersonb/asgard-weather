export function Logo() {
  const logo = document.createElement('h1');
  const span = document.createElement('span');
  span.textContent = 'Weather';
  logo.textContent = 'Asgard';
  logo.appendChild(span);
  logo.classList.add('logo');

  return logo
}