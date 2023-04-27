// Swiper Section

const swiperNews = new Swiper('#newsSwiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3.5,
    effect: 'cards',
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--news',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--news',
        prevEl: '.swiper-button-prev--news',
    },
    breakpoints: {
        1499: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1220: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        980: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        590: {
            slidesPerView: 1.6,
            spaceBetween: 20
        },
        520: {
            slidesPerView: 1.4,
            spaceBetween: 20
        },
        495: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 1.1,
            spaceBetween: 20
        },
        370: {
            slidesPerView: 1,
            spaceBetween: 10
        },

    }
});

const swiperBooks = new Swiper('#booksSwiper', {
    speed: 400,
    effect: 'cards',
    slidesPerView: 5,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--books',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--books',
        prevEl: '.swiper-button-prev--books',
    },
    breakpoints: {
        1499: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1260: {
            slidesPerView: 3.5,
            spaceBetween: 20
        },
        1180: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        980: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        590: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        495: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        370: {
            slidesPerView: 2,
            spaceBetween: 20
        },

    }
});

const swiperLink = new Swiper('#linksSwiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 2,
    effect: 'cards',
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--books',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--books',
        prevEl: '.swiper-button-prev--books',
    },
    breakpoints: {
        1180: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        980: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        590: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        495: {
            slidesPerView: 2,
            spaceBetween: 20
        },



    }
});