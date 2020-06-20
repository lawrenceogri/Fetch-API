const select = document.getElementById('Breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// FETCH FUNCTIONS
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => generateImage(data.message))

// HELPER FUNCTION
function generateImage(data){
    const html = `
        <img src='${data}' alt>
        <p>Click to view images of </p>
    `;
    card.innerHTML = html;
    console.log(card.innerHTML);
}
