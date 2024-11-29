const menuIcon = document.querySelector('.menu-icon');
const navLink = document.querySelector('.nav-link-style');


menuIcon.addEventListener('click', () => {
    navLink.forEach(link => {
        link.classList.toggle('active');
    })
});
