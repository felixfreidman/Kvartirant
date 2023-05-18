const checkboxesRepair = document.querySelectorAll('.repairCheckbox');
const resetRepair = document.querySelector('.resetCheckboxRepair');
const checkboxesColiver = document.querySelectorAll('.coliverCheckbox');
const resetColiver = document.querySelector('.resetCheckboxColiver');
const checkboxesRoom = document.querySelectorAll('.roomCheckbox');
const resetRoom = document.querySelector('.resetCheckboxRoom');



checkboxesRepair.forEach(repair => {
    repair.addEventListener('click', () => {
        if (!repair.classList.contains('resetCheckboxRepair')) {
            repair.classList.toggle('custom-checkbox--active');
            setTimeout(resetCheckboxRepair, 100);
        } else if (repair.classList.contains('resetCheckboxRepair')) {
            checkboxesRepair.forEach(inner_checkbox => {
                inner_checkbox.classList.remove('custom-checkbox--active');
                resetRepair.classList.add('custom-checkbox--active');
            })
        }
    })
})

checkboxesColiver.forEach(coliver => {
    coliver.addEventListener('click', () => {
        if (!coliver.classList.contains('resetCheckboxColiver')) {
            coliver.classList.toggle('custom-checkbox--active');
            setTimeout(resetCheckboxColiver, 100);
        } else if (coliver.classList.contains('resetCheckboxColiver')) {
            checkboxesColiver.forEach(inner_checkbox => {
                inner_checkbox.classList.remove('custom-checkbox--active');
                resetColiver.classList.add('custom-checkbox--active');
            })
        }
    })
})

checkboxesRoom.forEach(room => {
    room.addEventListener('click', () => {
        room.classList.toggle('custom-checkbox--active');
        setTimeout(resetCheckboxRoom, 100);
    })
})


function resetCheckboxRepair() {
    let controlSum = 0;
    checkboxesRepair.forEach(room => {
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
    let controlSum = 0;
    checkboxesColiver.forEach(room => {
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
    let controlSum = 0;
    checkboxesRoom.forEach(room => {
        if (room.classList.contains('custom-checkbox--active')) {
            controlSum++;
        }
    });
    if (controlSum == 0) {
        resetRoom.classList.add('custom-checkbox--active');
    }
}


if (window.location.href.includes('prefs')) {
    setTimeout(() => {

        if (document.querySelector('.userMeta').textContent !== '') {
            const userRoom = document.querySelector('.userRoom');
            checkboxesRoom.forEach(room => {
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
            const userRepair = document.querySelector('.userRepair');
            checkboxesRepair.forEach(repair => {
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
            const userColiver = document.querySelector('.userColiver');
            checkboxesColiver.forEach(coliver => {
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
    }, 300)

}