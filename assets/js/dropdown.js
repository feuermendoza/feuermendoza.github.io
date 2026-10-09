(function () {
    var button = document.querySelector('.dropbtn');
    var menu = document.getElementById('myDropdown');

    if (!button || !menu) return;

    function setOpen(open) {
        menu.classList.toggle('show', open);
        button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    // Toggle the menu when the button (or the icon inside it) is clicked;
    // any click elsewhere (including a menu link) closes it.
    document.addEventListener('click', function (event) {
        if (event.target.closest('.dropbtn')) {
            setOpen(!menu.classList.contains('show'));
        } else {
            setOpen(false);
        }
    });

    // Keyboard support: Enter/Space toggle, Escape closes
    button.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen(!menu.classList.contains('show'));
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') setOpen(false);
    });
})();
