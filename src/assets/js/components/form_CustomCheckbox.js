
// const roomChecks = document.querySelectorAll('.custom-checkbox');
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
