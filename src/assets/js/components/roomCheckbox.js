const roomChecks = document.querySelectorAll('.pref-slide__checkbox');

roomChecks.forEach(room => {
    room.addEventListener('click', () => {
        room.classList.toggle('pref-slide__checkbox--active')
    })
})