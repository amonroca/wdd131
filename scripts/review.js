import { products } from './products.mjs';

document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
document.querySelector('#year').innerHTML = `&copy;${new Date().getFullYear()}`;

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