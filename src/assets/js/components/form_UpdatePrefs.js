if (document.querySelector('.submitForm')) {
    const submitForm = document.querySelector('.submitForm');
    let roomsAmount = '';
    let budget = '';
    let areaSearch = '';
    let repairPrefs = '';
    let coliverPrefs = '';

    let prefsObject = {
        roomsAmount: '',
        budget: '',
        areaSearch: '',
        repairPrefs: '',
        coliverPrefs: '',
    }

    submitForm.addEventListener('click', () => {
        submitForm.classList.add('js--inactive')
        getRoomsAmount();
        getRepairPrefs();
        getColiverPrefs();
        budget = document.getElementById('userBudgetInput').value;
        areaSearch = document.getElementById('customSelect').textContent;
        const inputRooms = document.getElementById('roomsAmount');
        const inputBudget = document.getElementById('budgetAmount');
        const inputArea = document.getElementById('areaSearch');
        const inputRepairs = document.getElementById('repairPrefs');
        const inputColiver = document.getElementById('coliverPrefs');
        inputRooms.value = roomsAmount;
        inputBudget.value = budget;
        inputArea.value = areaSearch;
        inputRepairs.value = repairPrefs;
        inputColiver.value = coliverPrefs;
        document.getElementById('prefsForm').submit();
    });
    function getRoomsAmount() {
        const roomsCheckboxes = document.querySelectorAll('.roomCheckbox');
        roomsCheckboxes.forEach(box => {
            if (box.classList.contains('custom-checkbox--active')) {
                let value = box.textContent;
                roomsAmount += value;
                roomsAmount += ', '
            }
        })
        roomsAmount = roomsAmount.trim();
        roomsAmount = roomsAmount.slice(0, roomsAmount.length - 1);
    }

    function getRepairPrefs() {
        const repairsCheckboxes = document.querySelectorAll('.repairCheckbox');
        repairsCheckboxes.forEach(box => {
            if (box.classList.contains('custom-checkbox--active')) {
                let value = box.getAttribute('data-value');
                repairPrefs += value;
                repairPrefs += ', '
            }
        })
        repairPrefs = repairPrefs.trim();
        repairPrefs = repairPrefs.slice(0, repairPrefs.length - 1);
    }

    function getColiverPrefs() {
        const coliverCheckboxes = document.querySelectorAll('.coliverCheckbox');
        coliverCheckboxes.forEach(box => {
            if (box.classList.contains('custom-checkbox--active')) {
                let value = box.getAttribute('data-value');
                coliverPrefs += value;
                coliverPrefs += ', '
            }
        })
        coliverPrefs = coliverPrefs.trim();
        coliverPrefs = coliverPrefs.slice(0, coliverPrefs.length - 1);
    }
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




