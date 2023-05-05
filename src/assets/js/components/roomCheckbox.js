const roomChecks = document.querySelectorAll('.custom-checkbox');

roomChecks.forEach(room => {
    room.addEventListener('click', () => {
        room.classList.toggle('custom-checkbox--active')
    })
})