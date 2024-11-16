async function fetchTemples() {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const temples = await response.json();
    return temples;
}

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';

    const name = document.createElement('h2');
    name.textContent = temple.templeName;
    card.appendChild(name);

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    card.appendChild(image);

    return card;
}

async function displayTemples() {
    const temples = await fetchTemples();
    const templeContainer = document.getElementById('temple-container');

    temples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

// Call the displayTemples function when the page loads
window.onload = displayTemples;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
document.querySelector('#year').innerHTML = `&copy;${new Date().getFullYear()}`;