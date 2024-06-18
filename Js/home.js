const burger = document.querySelector('.burger');
const navList = document.querySelector('#nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
