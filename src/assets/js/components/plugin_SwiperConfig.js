// Swiper Section

const sliderContainers = document.querySelectorAll('.swiper-adt');

sliderContainers.forEach((swiper, index) => {
    const swiperPagination = swiper.querySelector('.swiper-pagination');
    swiper.classList.add(`swiper-adt--${index}`);
    swiperPagination.classList.add(`swiper-pagination--${index}`);
    const adtSwiper = new Swiper(`.swiper-adt--${index}`, {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 1,
        effect: 'cards',
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: `.swiper-pagination--${index}`,
            clickable: true,
        },
    })
});