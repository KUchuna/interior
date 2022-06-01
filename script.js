const home = document.querySelector('#home');
const collection = document.querySelector('#collection');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

home.addEventListener('click', () => {
    home.classList.add('active');
    collection.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
})
collection.addEventListener('click', () => {
    home.classList.remove('active');
    collection.classList.add('active');
    about.classList.remove('active');
    contact.classList.remove('active');
})
about.addEventListener('click', () => {
    home.classList.remove('active');
    collection.classList.remove('active');
    about.classList.add('active');
    contact.classList.remove('active');
})
contact.addEventListener('click', () => {
    home.classList.remove('active');
    collection.classList.remove('active');
    about.classList.remove('active');
    contact.classList.add('active');
})

const ham = document.querySelector('.ham');
const navButtons = document.querySelector('.nav-bar ul')
const button = document.querySelector('.main-button');

ham.addEventListener('click', () =>{
    navButtons.classList.toggle('ham-active');
    ham.classList.toggle('close');
    button.classList.toggle('erase-button');
    button.classList.toggle('main-button');
    home.classList.remove('active');
    collection.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
})