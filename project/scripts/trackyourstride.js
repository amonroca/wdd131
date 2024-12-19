document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
document.querySelector('#year').innerHTML = `&copy;${new Date().getFullYear()}`;

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.getElementById('navigation');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('show');
    });
});
