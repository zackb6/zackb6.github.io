const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
    });
}