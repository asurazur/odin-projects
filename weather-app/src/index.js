import "./styles/styles.css";
import { getWeather } from "./js/weather";

const searchField = document.querySelector("#search-location");

searchField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeather(searchField.value).then((res) => displayJsonInHtml(res));
  }
});
