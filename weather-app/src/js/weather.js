const API = "YU9CVBRBHANX2GM8RH2U2MHV6";
const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
let location = "Legazpi";
let unitGroup = "metric";

function withErrorHandling(fn) {
  return async function (...args) {
    try {
      return await fn(...args);
    } catch (err) {
      console.error("Error:", err.message);
      return null; // or throw err, depending on what you want
    }
  };
}

async function getWeatherFunc(location) {
  const res = await fetch(
    `${URL}/${location}?unitGroup=${unitGroup}&key=${API}`
  );
  const data = await res.json();
  return await data;
}

export const getWeather = withErrorHandling(getWeatherFunc);
// getWeather("Naga, Camarines Sur").then((res) => console.log(res));
