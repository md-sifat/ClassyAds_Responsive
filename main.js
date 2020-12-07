function navSlide() {
    const clickburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');

    clickburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}

navSlide();