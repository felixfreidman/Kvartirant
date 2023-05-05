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

if (document.getElementById('userBudgetInput')) {
  $(function () {
    $("#userBudget").slider({
      range: "min",
      min: 0,
      max: 200000,
      step: 1000,
      value: 50000,
      slide: function slide(event, ui) {
        $("#userBudgetInput").val(ui.value);
      }
    });
  });
  var budgetInput = document.getElementById('userBudgetInput');
  budgetInput.addEventListener('input', function () {
    var valueInput = budgetInput.value;
    $("#userBudget").slider("value", valueInput);
  });
}

if (document.getElementById('customSelect')) {
  var customSelect = document.getElementById('customSelect');
  var selectContainer = document.querySelector('.pref-slide__select-container');
  var selectOptions = selectContainer.querySelectorAll('.pref-slide__option');
  var savedString = customSelect.textContent;
  customSelect.addEventListener('click', function () {
    setTimeout(function () {
      selectContainer.classList.remove('js--hidden');
    }, 100);
  });

  window.onclick = function (event) {
    if (event.target != selectContainer && !event.target.classList.contains('pref-slide__option') && !event.target.classList.contains('pref-slide__select')) {
      selectContainer.classList.add("js--hidden");
    }
  };

  selectOptions.forEach(function (option, index) {
    option.addEventListener('click', function () {
      if (index != 0) {
        selectOptions[0].classList.remove('pref-slide__option--active');
        option.classList.toggle('pref-slide__option--active');
        customSelect.textContent = customSelect.textContent.replace('Все районы', '');

        if (customSelect.textContent == '') {
          customSelect.textContent = "".concat(option.textContent.slice(0, 5));
        } else {
          customSelect.textContent = "".concat(customSelect.textContent, ", ").concat(option.textContent.slice(0, 5));
        }
      } else {
        selectOptions.forEach(function (inner_option) {
          inner_option.classList.remove('pref-slide__option--active');
        });
        option.classList.add('pref-slide__option--active');
        customSelect.textContent = 'Все районы';
      }
    });
  });
}

var editIcons = document.querySelectorAll('.change-icon');
editIcons.forEach(function (icon) {
  icon.addEventListener('click', function () {
    var ID = icon.id;

    if (ID !== 'changePassword') {
      var editValueContainer = document.querySelector(".".concat(ID));
      var valueTextContainer = editValueContainer.querySelector('span');
      var value = valueTextContainer.textContent.trim();
      var editInput = document.createElement('input');
      valueTextContainer.classList.add('js--hidden');
      icon.classList.add('js--hidden');
      editInput.value = value;
      editInput.type = 'text';
      editInput.classList.add('editInput');
      editValueContainer.appendChild(editInput);
    } else {
      var _editValueContainer = document.querySelector(".".concat(ID));

      var valueContainer = _editValueContainer.querySelector('.info-value');

      var labelContainer = _editValueContainer.querySelector('.info-label');

      var passwordContainer = _editValueContainer.querySelector('.info-password');

      valueContainer.classList.add('js--hidden');
      labelContainer.classList.add('js--hidden');
      passwordContainer.classList.remove('js--hidden');
    }
  });
});

if (localStorage.getItem('logged')) {
  if (localStorage.getItem('logged') == 'true') {
    var account = document.querySelector('.account');
    account.classList.add('account--logged');
  }
}

var roomChecks = document.querySelectorAll('.custom-checkbox');
roomChecks.forEach(function (room) {
  room.addEventListener('click', function () {
    room.classList.toggle('custom-checkbox--active');
  });
}); // Swiper Section

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

if (window.location.href.includes('prefs')) {
  var allNextButtons = document.querySelectorAll('.pref-slide__button');
  var allSlides = document.querySelectorAll('.pref-slide');
  allNextButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      allSlides[index].classList.add('js--hidden');
      allSlides[index + 1].classList.remove('js--hidden');
    });
  });
}