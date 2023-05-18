"use strict";

var checkboxesRepair = document.querySelectorAll('.repairCheckbox');
var resetRepair = document.querySelector('.resetCheckboxRepair');
var checkboxesColiver = document.querySelectorAll('.coliverCheckbox');
var resetColiver = document.querySelector('.resetCheckboxColiver');
var checkboxesRoom = document.querySelectorAll('.roomCheckbox');
var resetRoom = document.querySelector('.resetCheckboxRoom');
checkboxesRepair.forEach(function (repair) {
  repair.addEventListener('click', function () {
    if (!repair.classList.contains('resetCheckboxRepair')) {
      repair.classList.toggle('custom-checkbox--active');
      setTimeout(resetCheckboxRepair, 100);
    } else if (repair.classList.contains('resetCheckboxRepair')) {
      checkboxesRepair.forEach(function (inner_checkbox) {
        inner_checkbox.classList.remove('custom-checkbox--active');
        resetRepair.classList.add('custom-checkbox--active');
      });
    }
  });
});
checkboxesColiver.forEach(function (coliver) {
  coliver.addEventListener('click', function () {
    if (!coliver.classList.contains('resetCheckboxColiver')) {
      coliver.classList.toggle('custom-checkbox--active');
      setTimeout(resetCheckboxColiver, 100);
    } else if (coliver.classList.contains('resetCheckboxColiver')) {
      checkboxesColiver.forEach(function (inner_checkbox) {
        inner_checkbox.classList.remove('custom-checkbox--active');
        resetColiver.classList.add('custom-checkbox--active');
      });
    }
  });
});
checkboxesRoom.forEach(function (room) {
  room.addEventListener('click', function () {
    room.classList.toggle('custom-checkbox--active');
    setTimeout(resetCheckboxRoom, 100);
  });
});
function resetCheckboxRepair() {
  var controlSum = 0;
  checkboxesRepair.forEach(function (room) {
    if (room.classList.contains('custom-checkbox--active')) {
      controlSum++;
    }
    if (controlSum > 1) {
      resetRepair.classList.remove('custom-checkbox--active');
    }
    if (controlSum == 0) {
      resetRepair.classList.add('custom-checkbox--active');
    }
  });
}
function resetCheckboxColiver() {
  var controlSum = 0;
  checkboxesColiver.forEach(function (room) {
    if (room.classList.contains('custom-checkbox--active')) {
      controlSum++;
    }
    if (controlSum > 1) {
      resetColiver.classList.remove('custom-checkbox--active');
    }
    if (controlSum == 0) {
      resetColiver.classList.add('custom-checkbox--active');
    }
  });
}
function resetCheckboxRoom() {
  var controlSum = 0;
  checkboxesRoom.forEach(function (room) {
    if (room.classList.contains('custom-checkbox--active')) {
      controlSum++;
    }
  });
  if (controlSum == 0) {
    resetRoom.classList.add('custom-checkbox--active');
  }
}
if (window.location.href.includes('prefs')) {
  setTimeout(function () {
    if (document.querySelector('.userMeta').textContent !== '') {
      var userRoom = document.querySelector('.userRoom');
      checkboxesRoom.forEach(function (room) {
        room.classList.remove('custom-checkbox--active');
        if (userRoom.textContent.includes('1') && room.textContent.includes('1')) {
          room.classList.add('custom-checkbox--active');
        } else if (userRoom.textContent.includes('2') && room.textContent.includes('2')) {
          room.classList.add('custom-checkbox--active');
        } else if (userRoom.textContent.includes('3') && room.textContent.includes('3')) {
          room.classList.add('custom-checkbox--active');
        } else if (userRoom.textContent.includes('4+') && room.textContent.includes('4+')) {
          room.classList.add('custom-checkbox--active');
        } else if (userRoom.textContent.includes('4') && room.textContent.includes('4') && !userRoom.textContent.includes('+') && !room.textContent.includes('+')) {
          room.classList.add('custom-checkbox--active');
        }
      });
      var userRepair = document.querySelector('.userRepair');
      checkboxesRepair.forEach(function (repair) {
        repair.classList.remove('custom-checkbox--active');
        if (userRepair.textContent.includes('бабушкин') && repair.textContent.includes('бабушкин')) {
          repair.classList.add('custom-checkbox--active');
        } else if (userRepair.textContent.includes('Косметический') && repair.textContent.includes('Косметический')) {
          repair.classList.add('custom-checkbox--active');
        } else if (userRepair.textContent.includes('Дизайнерский') && repair.textContent.includes('Дизайнерский')) {
          repair.classList.add('custom-checkbox--active');
        } else if (userRepair.textContent.includes('Не важно') && repair.textContent.includes('важно')) {
          repair.classList.add('custom-checkbox--active');
        }
      });
      var userColiver = document.querySelector('.userColiver');
      checkboxesColiver.forEach(function (coliver) {
        coliver.classList.remove('custom-checkbox--active');
        if (userColiver.textContent.includes('Собака') && coliver.textContent.includes('Собака')) {
          coliver.classList.add('custom-checkbox--active');
        } else if (userColiver.textContent.includes('Кот') && coliver.textContent.includes('Кот')) {
          coliver.classList.add('custom-checkbox--active');
        } else if (userColiver.textContent.includes('Другие') && coliver.textContent.includes('Другие')) {
          coliver.classList.add('custom-checkbox--active');
        } else if (userColiver.textContent.includes('Не важно') && coliver.textContent.includes('важно')) {
          coliver.classList.add('custom-checkbox--active');
        }
      });
    }
  }, 300);
}
if (document.getElementById('customSelect')) {
  var userArea = document.querySelector('.userArea');
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
        if (option.classList.contains('pref-slide__option--active')) {
          option.classList.remove('pref-slide__option--active');
          if (customSelect.textContent.includes(", ".concat(option.textContent.slice(0, 5)))) {
            customSelect.textContent = customSelect.textContent.replace(", ".concat(option.textContent.slice(0, 5)), '');
          } else {
            customSelect.textContent = customSelect.textContent.replace("".concat(option.textContent.slice(0, 5)), '');
          }
          if (customSelect.textContent.trim() == '') {
            customSelect.textContent = 'Все районы';
            selectOptions[0].classList.add('pref-slide__option--active');
          }
        } else if (!option.classList.contains('pref-slide__option--active')) {
          option.classList.add('pref-slide__option--active');
          customSelect.textContent = customSelect.textContent.replace('Все районы', '');
          customSelect.textContent = "".concat(customSelect.textContent, " ").concat(option.textContent.slice(0, 5));
        } else {
          option.classList.add('pref-slide__option--active');
          customSelect.textContent = customSelect.textContent.replace('Все районы', '');
          if (customSelect.textContent == '') {
            customSelect.textContent = "".concat(option.textContent.slice(0, 5));
          } else {
            customSelect.textContent = "".concat(customSelect.textContent, ", ").concat(option.textContent.slice(0, 5));
          }
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
  if (userArea.textContent !== '') {
    customSelect.textContent = userArea.textContent;
    selectOptions.forEach(function (option) {
      if (userArea.textContent.includes('Лен') && option.textContent.includes('Лен')) {
        option.classList.add('pref-slide__option--active');
        selectOptions[0].classList.remove('pref-slide__option--active');
      } else if (userArea.textContent.includes('Окт') && option.textContent.includes('Окт')) {
        option.classList.add('pref-slide__option--active');
        selectOptions[0].classList.remove('pref-slide__option--active');
      } else if (userArea.textContent.includes('Свер') && option.textContent.includes('Свер')) {
        option.classList.add('pref-slide__option--active');
        selectOptions[0].classList.remove('pref-slide__option--active');
      } else if (userArea.textContent.includes('Право') && option.textContent.includes('Право')) {
        option.classList.add('pref-slide__option--active');
        selectOptions[0].classList.remove('pref-slide__option--active');
      } else if (userArea.textContent.includes('Все') && option.textContent.includes('Все')) {
        option.classList.add('pref-slide__option--active');
        selectOptions[0].classList.remove('pref-slide__option--active');
      }
    });
  }
}
if (document.getElementById('userBudgetInput')) {
  var userBudget = document.querySelector('.userBudget');
  var value = 50000;
  if (userBudget.textContent !== '') {
    value = parseInt(userBudget.textContent);
    $("#userBudgetInput").val(value);
  }
  $(function () {
    $("#userBudget").slider({
      range: "min",
      min: 0,
      max: 200000,
      step: 1000,
      value: value,
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
if (document.querySelector('.submitForm')) {
  var getRoomsAmount = function getRoomsAmount() {
    var roomsCheckboxes = document.querySelectorAll('.roomCheckbox');
    roomsCheckboxes.forEach(function (box) {
      if (box.classList.contains('custom-checkbox--active')) {
        var _value = box.textContent;
        roomsAmount += _value;
        roomsAmount += ', ';
      }
    });
    roomsAmount = roomsAmount.trim();
    roomsAmount = roomsAmount.slice(0, roomsAmount.length - 1);
  };
  var getRepairPrefs = function getRepairPrefs() {
    var repairsCheckboxes = document.querySelectorAll('.repairCheckbox');
    repairsCheckboxes.forEach(function (box) {
      if (box.classList.contains('custom-checkbox--active')) {
        var _value2 = box.getAttribute('data-value');
        repairPrefs += _value2;
        repairPrefs += ', ';
      }
    });
    repairPrefs = repairPrefs.trim();
    repairPrefs = repairPrefs.slice(0, repairPrefs.length - 1);
  };
  var getColiverPrefs = function getColiverPrefs() {
    var coliverCheckboxes = document.querySelectorAll('.coliverCheckbox');
    coliverCheckboxes.forEach(function (box) {
      if (box.classList.contains('custom-checkbox--active')) {
        var _value3 = box.getAttribute('data-value');
        coliverPrefs += _value3;
        coliverPrefs += ', ';
      }
    });
    coliverPrefs = coliverPrefs.trim();
    coliverPrefs = coliverPrefs.slice(0, coliverPrefs.length - 1);
  };
  var submitForm = document.querySelector('.submitForm');
  var roomsAmount = '';
  var budget = '';
  var areaSearch = '';
  var repairPrefs = '';
  var coliverPrefs = '';
  var prefsObject = {
    roomsAmount: '',
    budget: '',
    areaSearch: '',
    repairPrefs: '',
    coliverPrefs: ''
  };
  submitForm.addEventListener('click', function () {
    submitForm.classList.add('js--inactive');
    getRoomsAmount();
    getRepairPrefs();
    getColiverPrefs();
    budget = document.getElementById('userBudgetInput').value;
    areaSearch = document.getElementById('customSelect').textContent;
    var inputRooms = document.getElementById('roomsAmount');
    var inputBudget = document.getElementById('budgetAmount');
    var inputArea = document.getElementById('areaSearch');
    var inputRepairs = document.getElementById('repairPrefs');
    var inputColiver = document.getElementById('coliverPrefs');
    inputRooms.value = roomsAmount;
    inputBudget.value = budget;
    inputArea.value = areaSearch;
    inputRepairs.value = repairPrefs;
    inputColiver.value = coliverPrefs;
    document.getElementById('prefsForm').submit();
  });
}

// $(function () {
//     $("#prefsForm").on("submit", function (e) {
//         e.preventDefault();

//         $.ajax({
//             type: "post",
//             url: '<?php admin_url( 'admin- ajax.php' )?>',
//             data: {
//             action: "update_prefs",
//             roomsAmount: prefsObject.roomsAmount,
//             budget: prefsObject.budget,
//             areaSearch: prefsObject.areaSearch,
//             repairPrefs: prefsObject.repairPrefs,
//             coliverPrefs: prefsObject.coliverPrefs,
//         },
//             success: function (response) {
//                 console.log(response, 'response');
//                 console.log('success', 'status');
//             },
//         });
// });
// });

// Swiper Section

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
var allNextButtons = document.querySelectorAll('.pref-slide__button');
var allSlides = document.querySelectorAll('.pref-slide');
allNextButtons.forEach(function (button, index) {
  if (index !== 2) {
    button.addEventListener('click', function () {
      allSlides[index].classList.add('js--hidden');
      allSlides[index + 1].classList.remove('js--hidden');
    });
  }
});
function activateForms() {
  if (document.querySelector('.signin-form')) {
    var signinForm = document.querySelector('.signin-form');
    var signupForm = document.querySelector('.signup-form');
    var captionIn = signinForm.querySelector('.caption');
    var captionUp = signupForm.querySelector('.caption');
    captionUp.textContent = 'Уже зарегистрированы?';
    captionIn.addEventListener('click', function () {
      signinForm.classList.add('js--hidden');
      signupForm.classList.remove('js--hidden');
    });
    captionUp.addEventListener('click', function () {
      signinForm.classList.remove('js--hidden');
      signupForm.classList.add('js--hidden');
    });
  }
}
setTimeout(activateForms, 300);
var timers = document.querySelectorAll('.message-time');
var formContainer = document.querySelectorAll('.chat-form');
function modifyTime() {
  timers.forEach(function (timer) {
    var timerValue = timer.textContent;
    timerValue = timerValue.slice(11, 17);
    timer.textContent = timerValue;
  });
}
modifyTime();
function activateLogout() {
  if (document.getElementById('menu-header')) {
    var menuHeaader = document.getElementById('menu-header');
    var logoutLink = menuHeaader.querySelector('a');
    var logoutLinkInNav = document.getElementById('logoutLink');
    logoutLinkInNav.href = logoutLink.href;
    logoutLinkInNav.addEventListener('click', function () {
      if (localStorage.getItem('logged')) {
        localStorage.setItem('logged', false);
        var account = document.querySelector('.account');
        account.classList.remove('account--logged');
      }
    });
  }
}
setTimeout(activateLogout, 300);
if (localStorage.getItem('logged')) {
  if (localStorage.getItem('logged') == 'true') {
    var account = document.querySelector('.account');
    var accountMobile = document.querySelector('.account-mobile');
    account.classList.add('account--logged');
    accountMobile.classList.add('account--logged');
  }
}
if (document.getElementById('menuOpener')) {
  var opener = document.getElementById('menuOpener');
  opener.addEventListener('click', function () {
    opener.classList.add('opener--active');
  });
  window.onclick = function (event) {
    if (event.target != opener && !event.target.classList.contains('checkSpan')) {
      opener.classList.remove("opener--active");
    }
  };
}
var pageLocation = window.location.href;
var props = ['Ваш профиль', 'Ваши сообщения'];
if (pageLocation.includes('profile') || pageLocation.includes('subscription')) {
  var allNavLinks = document.querySelectorAll('.profile-navigation__link');
  var sectionHeader = document.getElementById('ProfileHeader');
  var avatarFrame = document.querySelector('.lk-sidebar');
  allNavLinks.forEach(function (link, index) {
    if (index !== 4) {
      if (link.href.includes('tab=chat') && pageLocation.includes('tab=chat')) {
        link.classList.add('profile-navigation__link--active');
        sectionHeader.textContent = props[1];
        avatarFrame.classList.add('js--hidden');
      } else if (link.href.includes('user') && !link.href.includes('chat') && pageLocation.includes('user') && !pageLocation.includes('chat')) {
        link.classList.add('profile-navigation__link--active');
        sectionHeader.textContent = props[0];
      } else if (link.href.includes('subscription') && pageLocation.includes('subscription')) {
        link.classList.add('profile-navigation__link--active');
      }
    }
  });
}
// const account = document.querySelector('.account');
// if (pageLocation.includes('login')) {
//     if (localStorage.getItem('logged') == 'true') {
//         window.location.href = 'http://localhost/kvartirant/wp/profile/?user';
//     }
// }