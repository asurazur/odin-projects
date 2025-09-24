import "./styles.css";
import {loadHero, loadTestimonials} from "./modules/home.js";

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code that interacts with the DOM goes here
    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const aboutButton = document.querySelector("#about-btn");
    const contactButton = document.querySelector("#contact-btn");

    function setActiveButton(button) {
        const buttons = document.querySelectorAll("nav button");
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    homeButton.addEventListener('click', () => {
        loadHero();
        loadTestimonials();
        setActiveButton(homeButton);
    })
});


        // <div id="menu-section">
        //     <h1>Menu</h1>
        //     <div>
        //         <ul id="selections">
        //             <li><a href="#" class="hyperlink">All</a></li>
        //             <li><a href="#" class="hyperlink">Best Seller</a></li>
        //             <li><a href="#" class="hyperlink">Appetizer</a></li>
        //             <li><a href="#" class="hyperlink">Yakisoba</a></li>
        //             <li><a href="#" class="hyperlink">Ramen</a></li>
        //             <li><a href="#" class="hyperlink">Rice Meal</a></li>
        //             <li><a href="#" class="hyperlink">Dessert</a></li>
        //             <li><a href="#" class="hyperlink">Beverage</a></li>
        //         </ul>
        //         <div id="menu-container">
        //             <div class="menu-card">
        //                 <img src="./images/tonkotsu.png" alt="tonkotsu">
        //                 <h4>Rakuzen Tonkotsu Ramen</h4>
        //                 <p class="p2">chashu, soft-boiled egg, kikurage</p>
        //             </div>
        //             <div class="menu-card">
        //                 <img src="./images/teriyakidon.png" alt="">
        //                 <h4>Chicken Teriyakidon</h4>
        //                 <p class="p2">chicken thighs, sweet savory teriyaki sauce</p>
        //             </div>
        //             <div class="menu-card">
        //                 <img src="./images/okonomiyaki.png" alt="">
        //                 <h4>Okonomiyaki</h4>
        //                 <p class="p2">pork, cabbage, leeks bonito flakes</p>
        //             </div>
        //             <div class="menu-card">
        //                 <img src="./images/gyoza.png" alt="">
        //                 <h4>Gyoza</h4>
        //                 <p class="p2">pork, cabbage, shitake mushroom</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div id="contact-section">
        //     <div id="contact-heading">
        //         <h1>Get in Touch</h1>
        //         <p class="p2">Got questions about our menu, reservations, or special requests? Whether you’re planning a family dinner, a casual night out, or simply craving authentic Japanese flavors, our team is here to help.</p>
        //     </div>
    
        //     <div id="contact-content">
        //         <div id="contact-form-container">
        //             <h2>How can we help you?</h2>
        //             <form action="/submit-form" method="POST" id="contact-form">
        //             <div class="form-group">
        //                 <label for="name">Full Name</label>
        //                 <input type="text" id="name" name="name" required placeholder="Your Name">
        //             </div>
        //             <div class="form-group">
        //                 <label for="email">Email Address</label>
        //                 <input type="email" id="email" name="email" required placeholder="you@example.com">
        //             </div>
        //             <div class="form-group">
        //                 <label for="phone">Phone Number (optional)</label>
        //                 <input type="tel" id="phone" name="phone" placeholder="+63 912 345 6789">
        //             </div>
        //             <div class="form-group">
        //                 <label for="message">Your Message</label>
        //                 <textarea id="message" name="message" rows="5" required placeholder="Type your message here..."></textarea>
        //             </div>
        //             <button type="submit" id="contact-submit">Send Message</button>
        //             </form>
        //         </div>
        //         <div id="contact-details">
        //             <h3>Contact Details</h3>
        //             <p class="p2"><strong class="p2">Phone:</strong> +63 917 505 1031</p>
        //             <p class="p2"><strong class="p2">Email:</strong> ramenrakuzenph@gmail.com</p>
        //             <p class="p2"><strong class="p2">Address:</strong> Dona Maria Building, Daraga, Albay</p>
        //             <p class="p2"><strong class="p2">Opening Hours:</strong> Mon–Sun: 5:00 PM – 9:00 PM</p>
        //         </div>
        //     </div>
            
        // </div>