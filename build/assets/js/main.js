"use strict";

if (document.querySelector('.about-container--contacts')) {
  var openSection = function openSection(node) {
    var textValue = node.textContent;

    switch (textValue) {
      case 'Контакты':
        closeSection();
        contactsSection.classList.remove('js-hide-opacicity');
        break;

      case 'О библиотеке':
        closeSection();
        librarySection.classList.remove('js-hide-opacicity');
        break;

      case 'Наши ресурсы':
        closeSection();
        resourcesSection.classList.remove('js-hide-opacicity');
        break;
    }
  };

  var closeSection = function closeSection() {
    contactsSection.classList.add('js-hide-opacicity');
    librarySection.classList.add('js-hide-opacicity');
    resourcesSection.classList.add('js-hide-opacicity');
  };

  var shutControls = function shutControls(node) {
    controlsLink.forEach(function (control) {
      control.classList.remove('about-controls__link--active');
    });
  };

  var contactsSection = document.querySelector('.about-container--contacts');
  var librarySection = document.querySelector('.about-container--library');
  var resourcesSection = document.querySelector('.about-container--resources');
  var controlsLink = document.querySelectorAll('.about-controls__link');
  var controlsLinkBase = document.querySelector('.about-controls__link--base');
  var controlsLinkLibrary = document.querySelector('.about-controls__link--library');
  var controlsLinkResources = document.querySelector('.about-controls__link--resources');
  var navLinks = document.querySelectorAll('.header__navigation-link');
  var address = window.location.href;

  if (address.includes('#library')) {
    closeSection();
    librarySection.classList.remove('js-hide-opacicity');
    controlsLink.forEach(function (control) {
      control.classList.remove('about-controls__link--active');
    });
    controlsLinkLibrary.classList.add('about-controls__link--active');
  } else if (address.includes('#resources')) {
    closeSection();
    resourcesSection.classList.remove('js-hide-opacicity');
    controlsLink.forEach(function (control) {
      control.classList.remove('about-controls__link--active');
    });
    controlsLinkResources.classList.add('about-controls__link--active');
  } else {
    closeSection();
    contactsSection.classList.remove('js-hide-opacicity');
    controlsLink.forEach(function (control) {
      control.classList.remove('about-controls__link--active');
    });
    controlsLinkBase.classList.add('about-controls__link--active');
  }

  controlsLink.forEach(function (control) {
    control.addEventListener('click', function () {
      openSection(control);
      shutControls(control);
      var addressTemp = window.location.href;
      addressTemp = addressTemp.replace('#library', '');
      addressTemp = addressTemp.replace('#resources', '');

      switch (control.textContent) {
        case 'Контакты':
          addressTemp = addressTemp + '';
          break;

        case 'О библиотеке':
          addressTemp = addressTemp + '#library';
          break;

        case 'Наши ресурсы':
          addressTemp = addressTemp + '#resources';
          break;
      }

      window.location.href = addressTemp;
      control.classList.add('about-controls__link--active');
    });
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (link.href.includes('#')) {
        window.location.href = link.href;
        location.reload();
      }
    });
  });
}

if (document.querySelector('.about-container__structure-container')) {
  var allStructireContainers = document.querySelectorAll('.about-container__structure-container');
  allStructireContainers.forEach(function (container) {
    container.addEventListener('click', function () {
      toggleContainer(container);
    });
  });
}

function toggleContainer(node) {
  if (!node.classList.contains('about-container__structure-container--active-tab')) {
    node.classList.add('about-container__structure-container--active-tab');
  } else {
    node.classList.remove('about-container__structure-container--active-tab');
  }
} // // AJAX-запрос для отправки сообщений на почту, которая указана в админке сайта
// $(function () {
//   $("#applyForm").on("submit", function (e) {
//     e.preventDefault();
//     var name = $("#userName").val();
//     var phone = $("#userPhone").val();
//     var company = $("#userCompany").val();
//     var area = $("#userArea").val();
//     $.ajax({
//       type: "post",
//       url: "/wp-admin/admin-ajax.php",
//       data: {
//         action: "ajax_form",
//         name: name,
//         phone: phone,
//         company: company,
//         area: area,
//       },
//       success: function (response) {
//         $(".dark-layer").html(response);
//         closeAppliedForm();
//       },
//     });
//   });
// });
// // Проверяем, что все поля важные заполнены
// $(".form-button").on("click", function () {
//   inputAuthorization();
// });
// // Так как окно после отправки я генерирую сам, мне нужно его закрывать, поэтому функция вызывается, когда только появляется окно
// function closeAppliedForm() {
//   const darkLayer = document.querySelector(".dark-layer");
//   const closeAppliedForm = document.getElementById("closeAppliedForm");
//   const closeAppliedFormButton = document.getElementById(
//     "closeAppliedFormButton"
//   );
//   closeAppliedForm.addEventListener("click", () => {
//     darkLayer.classList.toggle("js--hidden");
//   });
//   closeAppliedFormButton.addEventListener("click", () => {
//     darkLayer.classList.toggle("js--hidden");
//   });
// }
// // Сама функция проверки полей и добавления дополнительных свойств полю
// function inputAuthorization() {
//   const inputsArray = document.querySelectorAll(".form-input");
//   inputsArray.forEach((input) => {
//     if (!input.value) {
//       const span = addWarningEmptySpan();
//       input.classList.add("form-input--warning");
//       const inputID = input.id;
//       const inputLabel = document.querySelector(`[for=${inputID}]`);
//       inputLabel.appendChild(span);
//     }
//   });
// }
// // Не хотел перегружать функция проверки и прочее, поэтому создание отдельного спана вынес отдельно
// function addWarningEmptySpan() {
//   const warningEmptySpan = document.createElement("span");
//   warningEmptySpan.classList.add("empty--input");
//   return warningEmptySpan;
// }
// // Как только пользователь решился ввести данные, если было предупреждение я удаляю предупреждения всякие
// function deleteWarningSpans() {
//   const inputsArray = document.querySelectorAll(".form-input");
//   inputsArray.forEach((input) => {
//     input.addEventListener("input", () => {
//       const inputID = input.id;
//       const inputLabel = document.querySelector(`[for=${inputID}]`);
//       if (inputLabel.querySelector(".empty--input")) {
//         const certainSpan = inputLabel.querySelector(".empty--input");
//         certainSpan.remove();
//         input.classList.remove("form-input--warning");
//       }
//     });
//   });
// }
// deleteWarningSpans();


if (document.querySelector('.form-section__form')) {
  var questionForm = document.querySelector('.form-section__form');
  questionForm.addEventListener('submit', function (event) {
    event.preventDefault();
  });
}

if (document.getElementById('map')) {
  var init = function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [52.251308, 104.267689],
      zoom: 16
    });
    var myPlacemark = new ymaps.Placemark([52.251308, 104.267689], {
      balloonContentHeader: 'Лермонтова, 253',
      balloonContentBody: "+7 (3952) 48\u201266\u201280"
    }, {
      iconLayout: 'default#image',
      iconImageHref: './assets/images/content/Logo_Simple_Better.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -22]
    });
    myMap.geoObjects.add(myPlacemark);
  };

  ymaps.ready(init);
}

var menuToggler = document.getElementById('MenuToggler');
var headerExpanded = document.querySelector('.header--extended');
var main = document.querySelector('.main');

function manipulateMenu() {
  menuToggler.classList.toggle('header__menu--opened');
  headerExpanded.classList.toggle('header--opened');
}

function handleClickOutsideBox(event) {
  if (!menuToggler.contains(event.target) && menuToggler.classList.contains('header__menu--opened')) {
    menuToggler.classList.toggle('header__menu--opened');
    headerExpanded.classList.toggle('header--opened');
  }
}

menuToggler.addEventListener('click', manipulateMenu);
document.addEventListener('click', handleClickOutsideBox);
var newsTogglers = document.querySelectorAll('.news-control__toggler');
var newsBlocks = document.querySelectorAll('.news-box');
newsTogglers.forEach(function (toggler) {
  toggler.addEventListener('click', function () {
    switchLayout(toggler);
  });
});

function switchLayout(node) {
  console.log(node);

  if (node.classList.contains('showAsBlocks') && !node.classList.contains('news-control__toggler--active')) {
    shutTogglers();
    node.classList.add('news-control__toggler--active');
    newsBlocks.forEach(function (block) {
      block.classList.remove('news-box--49p');
      block.classList.add('news-box--32p');
    });
  } else if (node.classList.contains('showAsList') && !node.classList.contains('news-control__toggler--active')) {
    shutTogglers();
    node.classList.add('news-control__toggler--active');
    newsBlocks.forEach(function (block) {
      block.classList.add('news-box--49p');
      block.classList.remove('news-box--32p');
    });
  }
}

function shutTogglers() {
  newsTogglers.forEach(function (toggler) {
    toggler.classList.remove('news-control__toggler--active');
  });
} // Swiper Section


var swiperNews = new Swiper('#newsSwiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3.5,
  effect: 'cards',
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination--news',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next--news',
    prevEl: '.swiper-button-prev--news'
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
    }
  }
});
var swiperBooks = new Swiper('#booksSwiper', {
  speed: 400,
  effect: 'cards',
  slidesPerView: 5,
  spaceBetween: 20,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination--books',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next--books',
    prevEl: '.swiper-button-prev--books'
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
    }
  }
});
var swiperLink = new Swiper('#linksSwiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 2,
  effect: 'cards',
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination--books',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next--books',
    prevEl: '.swiper-button-prev--books'
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
    }
  }
});