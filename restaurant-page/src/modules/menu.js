export function loadMenu() {
    const content = document.querySelector('#content');
    const section = document.createElement('div');
    section.id = 'menu-section';

    // Heading
    const heading = document.createElement('h1');
    heading.innerText = 'Menu';
    section.appendChild(heading);

    // container
    const container = document.createElement('div');

        // Selections
        const selectionDiv = document.createElement('ul');
        selectionDiv.id = 'selections';
        const selections = ['All', 'Best Seller', 'Appetizer', 'Yakisoba', 'Ramen', 'Rice Meal', 'Dessert', 'Beverage'];
        selections.forEach((selection) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.classList.add('hyperlink');
            a.innerText = selection;
            li.appendChild(a);
            selectionDiv.appendChild(li);
        })
        container.appendChild(selectionDiv);

        // Menu Container
        const menuDiv = document.createElement('div');
        menuDiv.id = 'menu-container';
        const menus = [
            {
                name: 'Rakuzen Tonkotsu Ramen',
                description: 'chashu, soft-boiled egg, kikurage',
                image: require('../images/tonkotsu.png'),
            },
            {
                name: 'Chicken Teriyakidon',
                description: 'chicken thighs, sweet savory teriyaki sauce<',
                image: require('../images/teriyakidon.png'),
            },
            {
                name: 'Okonomiyaki',
                description: 'pork, cabbage, leeks bonito flakes',
                image: require('../images/okonomiyaki.png'),
            },
            {
                name: 'Gyoza',
                description: 'pork, cabbage, shitake mushroom',
                image: require('../images/gyoza.png'),
            },
        ]

        menus.forEach((menu) => {
            const card = document.createElement('div');
            card.classList.add('menu-card');
            // Imge
            const image = document.createElement('img');
            image.src = menu.image;
            card.appendChild(image)
            // Name h4
            const name = document.createElement('h4');
            name.innerText = menu.name;
            card.appendChild(name);
            // Description p2
            const description = document.createElement('p');
            description.classList.add('p2');
            card.appendChild(description);

            menuDiv.appendChild(card);
        })
        container.appendChild(menuDiv);
        section.appendChild(container)
    content.appendChild(section);
}