const menu = document.querySelector('#mobile__menu');
const menuLink = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    // menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});