const nave = document.querySelector('nav');


window.addEventListener('scroll', function () {
    nave.classList.toggle('active', window.scrollY > 0)
});

