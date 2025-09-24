import "./styles.css";
import "./modules/home.js";

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code that interacts with the DOM goes here
    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const aboutButton = document.querySelector("#about-btn");
    const contactButton = document.querySelector("#contact-btn");

    homeButton.addEventListener('click', () => {
        homeButton.focus();
        loadHome();
    })
});