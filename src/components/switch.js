export function Switch({ temperatureScale }) {
  const switchEl = createSwitchElement();
  const [celsiusBtn, fahrenheitBtn] = createTemperatureButtons(temperatureScale);

  celsiusBtn.addEventListener("click", () => {
    toggleTemperatureScale(celsiusBtn, fahrenheitBtn);
    temperatureScale.celsius = true;
    temperatureScale.fahrenheit = false;
    saveCurrentTempScale(temperatureScale)
  });
  fahrenheitBtn.addEventListener("click", () => {
    toggleTemperatureScale(fahrenheitBtn, celsiusBtn);
    temperatureScale.celsius = false;
    temperatureScale.fahrenheit = true;
    saveCurrentTempScale(temperatureScale)
  });

  switchEl.append(celsiusBtn, fahrenheitBtn);

  return switchEl;
}

function createSwitchElement() {
  const switchEl = document.createElement("div");
  switchEl.classList.add("switch");
  return switchEl;
}

function createTemperatureButtons(temperatureScale) {
  const celsiusBtn = createButton("°C", temperatureScale.celsius);
  const fahrenheitBtn = createButton("°F", temperatureScale.fahrenheit);
  return [celsiusBtn, fahrenheitBtn];
}

function createButton(text, isSelected) {
  const button = document.createElement("button");
  button.classList.add("switch-btn");
  button.role = isSelected ? "selected" : "unselected";
  button.textContent = text;
  return button;
}

function toggleTemperatureScale(selectedButton, unselectedButton) {
  selectedButton.role = "selected";
  unselectedButton.role = "unselected";
}

function saveCurrentTempScale(temperatureScale) {
  window.localStorage.setItem(
    "@asgard-weather:temp-scale",
    JSON.stringify(temperatureScale)
  );
};
