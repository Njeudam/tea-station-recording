const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('nav-bar');
const navClose = document.getElementById('nav-close');
const scrollTop = document.getElementsByClassName('scroll-top');

navBtn.addEventListener('click', () => {
    navBar.classList.add('show-nav')
});
navClose.addEventListener('click', () => {
    navBar.classList.remove('show-nav')
});
