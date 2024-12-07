document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
document.querySelector('#year').innerHTML = `&copy;${new Date().getFullYear()}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product-list');

    document.getElementById('product-name').textContent = products.find(product => product.id === productId).name;
    document.getElementById('average-rating').textContent = products.find(product => product.id === productId).averagerating;
    document.getElementById('overall-rating').textContent = urlParams.get('stars');
    document.getElementById('installation-date').textContent = urlParams.get('installation-date');
    document.getElementById('useful-features').textContent = urlParams.getAll('features').join(', ');
    document.getElementById('review-text').textContent = urlParams.get('review');
    document.getElementById('reviewer-name').textContent = urlParams.get('name') || 'Anonymous';
});

let reviewCount = localStorage.getItem('reviewCount') || 0;

document.getElementById('review-count').innerHTML = `You have completed <strong>${reviewCount}</strong> reviews.`;