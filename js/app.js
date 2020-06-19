const select = document.getElementById('Breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// FETCH FUNCTIONS
fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(data => console.log(data.message))