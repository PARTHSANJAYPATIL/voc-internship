const menuToggle = document.querySelector('.menu-toggle');
const sideNav = document.querySelector('.sidenav');
const closeNav = document.querySelector('.close-btn');
const sideNavLinks = document.querySelectorAll('.sidenav a');
const filterButtons = document.querySelectorAll('.category button');
const galleryCards = document.querySelectorAll('.videos .card');

function toggleSideNav() {
    sideNav.classList.toggle('open');
    sideNav.setAttribute('aria-hidden', sideNav.classList.contains('open') ? 'false' : 'true');
}

menuToggle.addEventListener('click', toggleSideNav);
closeNav.addEventListener('click', toggleSideNav);

sideNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        sideNav.classList.remove('open');
        sideNav.setAttribute('aria-hidden', 'true');
    });
});

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        galleryCards.forEach((card) => {
            const category = card.dataset.category.toLowerCase();
            const isVisible = filter === 'all' || category.includes(filter);
            card.style.display = isVisible ? 'grid' : 'none';
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    if (filterButtons.length) {
        filterButtons[0].click();
    }
});
