const baseURL = 'https://efa-cors-anywhere.herokuapp.com/https://superheroapi.com/api/';
const key = '10159011253549020'
let url;

const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('.search-form');
const searchName = document.querySelector('.search');

let cardImg = document.querySelector('#cardImg')
let name = document.querySelector('.card-title')
let cardInfo = document.querySelector('.card-text')
let item1 = document.querySelectorAll('.list-group-item')[0];
let item2 = document.querySelectorAll('.list-group-item')[1];
let item3 = document.querySelectorAll('.list-group-item')[2];

// let card = document.querySelector('.card')
// card.style.display = 'none'


searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    let id = searchName.value
    url = baseURL + key +`/${id}`
    // card.style.display = 'inline'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        cardImg.src = data.image.url
        name.innerText = data.name
        cardInfo.innerText = data.biography.alignment
        let goodBad = cardInfo.innerText
        if (goodBad === 'good'){
            cardInfo.innerText = 'You are a Hero!'
        } else {
            cardInfo.innerText = 'You are a Villian!'
        }
        item1.innerText = "From: " + data.biography.publisher
        item2.innerText = "Occupation: " + data.work.occupation
        item3.innerText = "First Appearance: " + data.biography['first-appearance']
        })
}
