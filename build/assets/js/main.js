"use strict";

var pageLocation = window.location.href;

if (pageLocation.includes('profile')) {
  localStorage.setItem('logged', true);
  var allNavLinks = document.querySelectorAll('.profile-navigation__link');
  allNavLinks.forEach(function (link) {
    if (link.href.includes('account-profile') && pageLocation.includes('account-profile')) {
      link.classList.add('profile-navigation__link--active');
    }

    if (link.href.includes('subscription-profile') && pageLocation.includes('subscription-profile')) {
      link.classList.add('profile-navigation__link--active');
    }

    if (link.href.includes('settings-profile') && pageLocation.includes('settings-profile')) {
      link.classList.add('profile-navigation__link--active');
    }
  });
}

if (localStorage.getItem('logged')) {
  console.log(localStorage.getItem('logged'));

  if (localStorage.getItem('logged') == 'true') {
    var account = document.querySelector('.account');
    account.classList.add('account--logged');
  }
} // Swiper Section


var sliderContainers = document.querySelectorAll('.swiper-adt');
sliderContainers.forEach(function (swiper, index) {
  var swiperPagination = swiper.querySelector('.swiper-pagination');
  swiper.classList.add("swiper-adt--".concat(index));
  swiperPagination.classList.add("swiper-pagination--".concat(index));
  var adtSwiper = new Swiper(".swiper-adt--".concat(index), {
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 1,
    effect: 'cards',
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: ".swiper-pagination--".concat(index),
      clickable: true
    }
  });
});