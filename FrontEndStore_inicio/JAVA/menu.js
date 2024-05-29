const nave = document.querySelector('nav');
const nav = document.querySelector('.nave');
const logo = document.querySelector('.nave__logo');
const menuItems = document.querySelectorAll('.nave__menu a');

window.addEventListener('scroll', function () {
    nave.classList.toggle('active', window.scrollY > 0)
    if (window.scrollY > 0) {
        nave.classList.add('nav-background-short');
    } else {
        nave.classList.remove('nav-background-short');
    }
});

let prevScrollPos = window.pageYOffset;
let isVisible = true;

function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    const windowWidth = window.innerWidth;

    if (windowWidth < 600) {
        if (currentScrollPos > prevScrollPos) {
            if (isVisible) {
                hideNav();
            }
        } else {
            if (!isVisible) {
                showNav();
            }
        }

        prevScrollPos = currentScrollPos;

        if (window.scrollY === 0) {
            showNav();
        }
    } else {
        if (!isVisible) {
            showNav();
        }
    }
}

function hideNav() {
    nav.style.transition = 'all 1.5s ease';
    nav.style.transform = 'translateY(-100%)';
    logo.style.transition = 'all 1.5s ease';
    logo.style.opacity = '0';
    menuItems.forEach(item => {
        item.style.transition = 'all 1.5s ease';
        item.style.opacity = '0';
    });
    isVisible = false;
}

function showNav() {
    setTimeout(() => {
        nav.style.transition = 'all 1s ease';
        nav.style.transform = 'translateY(0)';
        logo.style.transition = 'all 1s ease';
        logo.style.opacity = '1';
        menuItems.forEach(item => {
            item.style.transition = 'all 1s ease';
            item.style.opacity = '1';
        });
        isVisible = true;
    }, 2000);
}