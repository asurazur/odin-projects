const API = "YU9CVBRBHANX2GM8RH2U2MHV6";
const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
let unitGroup = "metric";

async function getWeatherFunc(location) {
  try {
    const res = await fetch(
      `${URL}/${location}?unitGroup=${unitGroup}&key=${API}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return undefined;
  }
}

export const getWeather = async function (location) {
  const jsonData = await getWeatherFunc(location);
  if (jsonData === undefined) {
    const paths = { error: true };
    return paths;
  }
  const conditions = jsonData.currentConditions;
  const paths = {
    location: jsonData.resolvedAddress,
    temperature: conditions.temp,
    icon: conditions.icon,
    description: jsonData.days[0].description,
    error: false,
  };
  return paths;
};
