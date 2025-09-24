export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="hero">
            <div id="hero-caption">
                <div id="headline"><span>Authentic Ramen</span> in Legazpi City</div>
                <p class="p1">From steaming bowls of ramen to delicate sushi, experience the warmth and authenticity of Japan right here in Legazpi City.</p>
                <div id="cta-buttons">
                    <button class="cta primary-btn">Reserve Now</button>
                    <button class="cta outline-btn">See Menu</button>
                </div>
            </div>
            <div id="hero-image">
            </div>
        </div>`;
    const heroImage = content.querySelector("#hero-image");
    const imageElement = document.createElement("img")
    imageElement.src = require('../images/hero-image.jpeg')
    imageElement.alt = "Ramen, done right."
    heroImage.append(imageElement);
}