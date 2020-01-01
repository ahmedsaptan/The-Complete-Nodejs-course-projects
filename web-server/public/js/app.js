console.log("Client side js");


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    console.log(location);
    const endPoint = `http://localhost:3000/weather?address=${location}`;
    fetch(endPoint).then(response => {
        response.json().then(data => {
            console.log(data);
        })
    })
});