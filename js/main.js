(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 60) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

//burger handler 
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav__close__line');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav__active');

    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav__active');
    });

}());