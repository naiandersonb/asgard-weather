/**
 * @typedef {Object} Weather
 * @property {string} city
 * @property {string} region
 * @property {string} localTime
 * @property {string} country
 * @property {number} temp_celsius
 * @property {number} temp_fahrenheit
 * @property {string} condition
 * @property {string} icon
 * @property {number} humidity
 * @property {string} weatherCategory
 */

/**
 * Fetches the weather information for a given city.
 * 
 * @param {string} city - The city to fetch the weather for.
 * @returns {Promise<Weather | {}>} A promise that resolves to the weather information.
 */
export const getWeather = async (city) => {
  try {
    const BASE_URL = "http://api.weatherapi.com/v1";
    const API_KEY = "e0902a33cee34fa39fe142014241306";

    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );

    const data = await response.json();

    const { location, current } = data;

    /** @type {Weather} */
    const contentData = {
      city: location.name,
      region: location.region,
      localTime: current.last_updated,
      country: location.country,
      temp_celsius: current.temp_c,
      temp_fahrenheit: current.temp_f,
      condition: current.condition.text,
      icon: current.condition.icon,
      humidity: current.humidity,
    };

    // Determine weather condition based on temperature and condition
    const weatherCategory = categorizeWeather(contentData.temp_celsius, contentData.condition);

    // Add the weather category to the content data
    contentData.weatherCategory = weatherCategory;

    return contentData;
  } catch (error) {
    // Return an empty object in case of error
    return {};
  }
};

/**
 * Categorizes the weather based on temperature and condition.
 * 
 * @param {number} tempCelsius - The temperature in Celsius.
 * @param {string} condition - The current weather condition.
 * @returns {string} The weather category.
 */
function categorizeWeather(tempCelsius, condition) {
  if (condition.toLowerCase().includes("rain")) {
    return "rainy";
  } else if (tempCelsius <= 10) {
    return "cold";
  } else if (tempCelsius > 10 && tempCelsius < 25) {
    return "normal";
  } else {
    return "sunny";
  }
}
