const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Cedar City Utah",
		location: "Cedar City, Utah, United States",
		dedicated: "2017, December, 10",
		area: 42657,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
	  },
	  {
		templeName: "Provo City Center",
		location: "Provo, Utah, United States",
		dedicated: "2016, March, 20",
		area: 85084,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
	  },
	  {
		templeName: "Provo Utah",
		location: "Provo, Utah, United States",
		dedicated: "1972, February, 9",
		area: 130825,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg"
	  },
	  {
		templeName: "Winter Quarters Nebraska",
		location: "Florence, Nebraska, United States",
		dedicated: "2001, April, 22",
		area: 16000,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
	  },
	  {
		templeName: "Salt Lake",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 403000,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
	  },
	  {
		templeName: "Logan Utah",
		location: "Logan, Utah, United States",
		dedicated: "1884, May, 17",
		area: 119619,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
	  },
	  {
		templeName: "The Hague Netherlands",
		location: "Zoetermeer, Netherlands",
		dedicated: "2019, September, 8",
		area: 10500,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg"
	  },
	  {
		templeName: "Barranquilla Colombia",
		location: "Barranquilla, Colombia",
		dedicated: "2018, December, 9",
		area: 25300,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
	  }  
];

const createTempleCards = (filteredTemples) => {
    const container = document.querySelector('#temple-container');
    container.innerHTML = ''; // Clear existing cards

    filteredTemples.forEach(temple => {
        // Create card element
        const card = document.createElement('picture');
        card.classList.add('temple-card');

        // Create and append h2 element for temple name
        const h2 = document.createElement('h2');
        h2.textContent = temple.templeName;
        card.appendChild(h2);

        // Create and append p elements for location, dedicated, and area
        const location = document.createElement('p');
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement('p');
        area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
        card.appendChild(area);

        // Create and append img element for temple image
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Image`;
		img.loading = 'lazy';
        card.appendChild(img);

        // Append card to container
        container.appendChild(card);
    });
};

const filterTemples = (criteria) => {
    let filteredTemples = [];

    switch(criteria) {
        case 'Old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'Home':
        default:
            filteredTemples = temples;
            break;
    }

    createTempleCards(filteredTemples);
};

// Add event listeners to menu options
document.querySelector('#old').addEventListener('click', () => filterTemples('Old'));
document.querySelector('#new').addEventListener('click', () => filterTemples('New'));
document.querySelector('#large').addEventListener('click', () => filterTemples('Large'));
document.querySelector('#small').addEventListener('click', () => filterTemples('Small'));
document.querySelector('#home').addEventListener('click', () => filterTemples('Home'));

// Initial display of all temples
filterTemples('Home');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
document.querySelector('#year').innerHTML = `&copy;${new Date().getFullYear()}`;