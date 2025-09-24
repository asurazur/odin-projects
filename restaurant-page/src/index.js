import "./styles.css";
import {loadHero, loadTestimonials} from "./modules/home.js";
import { loadMenu } from "./modules/menu.js";
import { loadContact } from "./modules/contact.js";

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code that interacts with the DOM goes here
    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const contactButton = document.querySelector("#contact-btn");

    function setActiveButton(button) {
        const buttons = document.querySelectorAll("nav button");
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    homeButton.addEventListener('click', () => {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        loadHero();
        loadTestimonials();
        loadMenu();
        loadContact();
        setActiveButton(homeButton);
    })

    menuButton.addEventListener('click', () => {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        loadMenu();
        setActiveButton(menuButton);
    })

    contactButton.addEventListener('click', () => {
        const content = document.querySelector("#content");
        content.innerHTML = ''
        loadContact();
        setActiveButton(contactButton);
    })

    homeButton.click();
});