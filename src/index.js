import { Content } from "./components/content";
import { Form } from "./components/form";
import { Load } from "./components/load";
import { NotFound } from "./components/not-found";
import { Switch } from "./components/switch";
import { getWeather } from "./services";
import "./styles/style.css";

const renderContent = (app, contentData, currentTemperatureScale) => {
  const content = Content({
    contentData,
    currentTemperatureScale,
  });

  app.appendChild(content);
};

const init = () => {
  const app = document.querySelector("#app");
  const currentTemperatureScale = localStorage.getItem(
    "@asgard-weather:temp-scale"
  );
 
  let temperatureScale = {
    celsius: true,
    fahrenheit: false,
  };

  if (currentTemperatureScale) {
    temperatureScale = JSON.parse(currentTemperatureScale);
  }

  const form = Form();
  const switchEl = Switch({ temperatureScale });
  const load = Load();
  const notFoundEl = NotFound();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const localeValue = document.getElementById("locale-input").value;
    if (!localeValue.trim()) return alert("Please enter a city name");

    const existingContent = app.querySelector(".content-container");
    const existingNotFound = app.querySelector(".not-found-container");
    if (existingContent) app.removeChild(existingContent);
    if (existingNotFound) app.removeChild(existingNotFound);
    app.appendChild(load);
    try {
      const response = await getWeather(localeValue);
      app.removeChild(load);

      if (response?.city) {
        renderContent(app, response, temperatureScale);
      } else {
        app.appendChild(notFoundEl);
      }
    } catch (error) {
      app.removeChild(load);
      alert("Failed to fetch weather data. Please try again.");
    }
  });

  app.appendChild(switchEl);
  app.appendChild(form);
};

window.addEventListener("DOMContentLoaded", init);
