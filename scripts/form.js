import { products } from './products.mjs';

document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
document.querySelector('#year').innerHTML = `&copy;${new Date().getFullYear()}`;

function populateProductList() {
    products.forEach(product => {
        const selectElement = document.querySelector('#product-list');
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateProductList);

function validateForm(event) {
    event.preventDefault();
    incrementReviewCount();
    submitForm();
}

function incrementReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
}

function submitForm() {
    const form = document.getElementById('product-review-form');
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();
    window.location.href = `review.html?${queryString}`;
}

document.getElementById('product-review-form').addEventListener('submit', validateForm);