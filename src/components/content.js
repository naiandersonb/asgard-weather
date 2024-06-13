import ColdIcon from "../images/cold.svg";
import NormalIcon from "../images/normal.svg";
import RainyIcon from "../images/rainy.svg";
import SunnyIcon from "../images/sunny.svg";

const weatherIcons = {
  rainy: RainyIcon,
  cold: ColdIcon,
  normal: NormalIcon,
  sunny: SunnyIcon,
};

const setCurrentTemperatureScale = ([c_temp, f_temp], currentTemperatureScale) => {
  if (currentTemperatureScale.celsius) {
    return `${c_temp}°C`;
  } else {
    return `${f_temp}°F`;
  }
};

export function Content({ contentData, currentTemperatureScale }) {
  const date = new Date(contentData.localTime);
  
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const temperature = document.createElement("h2");
  temperature.classList.add("temperature");
  temperature.textContent = setCurrentTemperatureScale(
    [contentData.temp_celsius, contentData.temp_fahrenheit],
    currentTemperatureScale
  );

  const img = document.createElement("img");
  img.src = weatherIcons[contentData.weatherCategory];

  const localeName = document.createElement("h3");
  const localTime = document.createElement("p");

  localTime.textContent = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const city = contentData.city;
  const region = contentData?.region ?? "";

  localeName.textContent = `${city}${region ? `, ${region}` : ""}`;
  contentContainer.append(temperature);
  contentContainer.append(img, localeName, localTime);

  return contentContainer;
}
