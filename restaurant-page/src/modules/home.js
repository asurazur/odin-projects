const content = document.getElementById('content');
export function loadHero() {
    const hero = document.createElement("div");
    hero.id = "hero";

    // Hero caption
    const heroCaption = document.createElement("div");
    heroCaption.id = "hero-caption";

    // Headline
    const headline = document.createElement("div");
    headline.id = "headline";
    const span = document.createElement("span");
    span.textContent = "Authentic Ramen";
    headline.appendChild(span);
    headline.append(" in Legazpi City");

    // Paragraph
    const p = document.createElement("p");
    p.className = "p1";
    p.textContent =
    "From steaming bowls of ramen to delicate sushi, experience the warmth and authenticity of Japan right here in Legazpi City.";

    // CTA buttons
    const ctaButtons = document.createElement("div");
    ctaButtons.id = "cta-buttons";

    const reserveBtn = document.createElement("button");
    reserveBtn.className = "cta primary-btn";
    reserveBtn.textContent = "Reserve Now";

    const menuBtn = document.createElement("button");
    menuBtn.className = "cta outline-btn";
    menuBtn.textContent = "See Menu";

    ctaButtons.appendChild(reserveBtn);
    ctaButtons.appendChild(menuBtn);

    // Append caption parts
    heroCaption.appendChild(headline);
    heroCaption.appendChild(p);
    heroCaption.appendChild(ctaButtons);

    // Hero image
    const heroImage = document.createElement("div");
    heroImage.id = "hero-image";
    const image = document.createElement('img');
    image.src = require('../images/hero-image.jpeg');
    image.alt = 'Ramen, done right.';
    heroImage.appendChild(image);

    // Put it all together
    hero.appendChild(heroCaption);
    hero.appendChild(heroImage);
    content.appendChild(hero)
}

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

export function loadTestimonials(){
    const section = document.createElement("div");
    section.id = "testimonials";
    
    const heading = document.createElement("h1");
    heading.innerText = "What Our Guests Say";
    section.appendChild(heading);

    const container = document.createElement("div");
    section.appendChild(container);

    // Generate Testimonial-card
    const testimonials = [
        {
            description: 'Rakuzen has quickly become our new go-to spot for satisfying ramen cravings. The service is incredibly warm and accommodating, making each visit feel genuinely welcoming.',
            stars: 5,
            image: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z",
            name: 'User',
        },
        {
            description: 'So far we\'ve dined here 3x and food and service has been very consistent. they now also have free fruity-minty candies that they give out to customers when you bill out.',
            stars: 5,
            image: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z",
            name: 'User',
        },
        {
            description: '3 ramen bowls, Gyoza, Nori fries.  Delicious and worth it! Staff were super nice, fast service, and no judgment even in slippers, Open 5–9PM only, so plan ahead!',
            stars: 5,
            image: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z",
            name: 'User',
        },
    ]


    testimonials.forEach((testimony) => {
        const card = document.createElement('div');
        card.classList.add('testimonial-card');

        // Quote
        const quote = document.createElement('q');
        quote.classList.add('p1');
        quote.innerText = testimony.description;
        card.appendChild(quote);

        // Stars
        const svgns = "http://www.w3.org/2000/svg";
        const stars = document.createElement('div');
        for(let i=0; i<testimony.stars; ++i){
            // Create the <svg> element
            const svg = document.createElementNS(svgns, "svg");
            svg.setAttribute("xmlns", svgns);
            svg.setAttribute("height", "24px");
            svg.setAttribute("width", "24px");
            svg.setAttribute("viewBox", "0 -960 960 960");
            svg.setAttribute("fill", "#F8BC6A");

            // Create the <path> element
            const path = document.createElementNS(svgns, "path");
            path.setAttribute("d", "m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z");

            // Append path to svg
            svg.appendChild(path);
            stars.appendChild(svg);
        }
        card.appendChild(stars);
        
        // User Image
        const userDiv = document.createElement('div');
            // Create Profile
        const userSvg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        userSvg.setAttribute("height", "24px");
        userSvg.setAttribute("width", "24px");
        userSvg.setAttribute("viewBox", "0 -960 960 960");
        userSvg.setAttribute("fill", "#000000");
        const userPath = document.createElementNS(svgns, "path");
        userPath.setAttribute("d", testimony.image);
        userSvg.appendChild(userPath);
        userDiv.appendChild(userSvg);
        

        const userName = document.createElement('p');
        userName.classList.add('p2'); 
        userName.innerText = testimony.name;
        userDiv.appendChild(userName);
        
        card.appendChild(userDiv)

        // HyperLink
        const linkDiv = document.createElement('div');
        const hyperlink = document.createElement('a');
        hyperlink.classList.add('hyperlink');
        hyperlink.innerText = 'Review';
        linkDiv.appendChild(hyperlink);
        card.appendChild(linkDiv);

        container.appendChild(card);
    })
    section.appendChild(container);
    content.appendChild(section);
}

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