document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = document.querySelector('.nave').offsetHeight;
    var nav = document.querySelector('.nave');

    window.addEventListener('scroll', function (event) {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll hacia abajo
            nav.classList.add('oculto');
        } else {
            // Scroll hacia arriba o en la parte superior de la página
            nav.classList.remove('oculto');
        }

        lastScrollTop = st;
    }, false);
});

