import "./styles.css";
import {loadHome} from "./modules/home.js";

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
        loadHome();
        setActiveButton(homeButton);
    })
});


        // <div id="hero">
        //     <div id="hero-caption">
        //         <div id="headline"><span>Authentic Ramen</span> in Legazpi City</div>
        //         <p class="p1">From steaming bowls of ramen to delicate sushi, experience the warmth and authenticity of Japan right here in Legazpi City.</p>
        //         <div id="cta-buttons">
        //             <button class="cta primary-btn">Reserve Now</button>
        //             <button class="cta outline-btn">See Menu</button>
        //         </div>
        //     </div>
        //     <div id="hero-image">
        //         <img src="./images/hero-image.jpeg" alt="Ramen, done right.">
        //     </div>
        // </div>
        // <div id="testimonials">
        //     <h1>What Our Guests Say</h1>
        //     <div>
        //         <div class="testimonial-card">
        //             <q class="p1">Rakuzen has quickly become our new go-to spot for satisfying ramen cravings. The service is incredibly warm and accommodating, making each visit feel genuinely welcoming.</q>
        //             <div>
        //                 <!-- Stars -->
        //                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //             </div>
        //             <div>
        //                 <!-- Image -->
        //                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        //                  <p class="p2">User</p>
        //             </div>
        //             <div>
        //                 <!-- Review Link -->
        //                  <a class="hyperlink" href="#">Review</a>
        //             </div>
        //         </div>
        //         <div class="testimonial-card">
        //             <q class="p1">So far we've dined here 3x and food and service has been very consistent. they now also have free fruity-minty candies that they give out to customers when you bill out.</q>
        //             <div>
        //                 <!-- Stars -->
        //                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //             </div>
        //             <div>
        //                 <!-- Image -->
        //                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        //                  <p class="p2">User</p>
        //             </div>
        //             <div>
        //                 <!-- Review Link -->
        //                  <a class="hyperlink" href="#">Review</a>
        //             </div>
        //         </div>
        //         <div class="testimonial-card">
        //             <q class="p1">3 ramen bowls, Gyoza, Nori fries.  Delicious and worth it! Staff were super nice, fast service, and no judgment even in slippers, Open 5–9PM only, so plan ahead!</q>
        //                 <div>
        //                     <!-- Stars -->
        //                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F8BC6A">
        //                     <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        //                 </svg>
        //             </div>
        //             <div>
        //                 <!-- Image -->
        //                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        //                  <p class="p2">User</p>
        //             </div>
        //             <div>
        //                 <!-- Review Link -->
        //                  <a class="hyperlink" href="#">Review</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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