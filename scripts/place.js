let temp = 10; // Temperatura em graus Celsius
let speed = 5; // Velocidade do vento em km/h

document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;
document.querySelector('#year').innerHTML = `&copy;${new Date().getFullYear()}`;

const windChill = (temp, speed) => {
    // Fórmula para calcular o wind chill em graus Celsius
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

document.querySelector('#windChill').innerHTML = `${windChill(temp, speed).toFixed(2)}&deg;C`;