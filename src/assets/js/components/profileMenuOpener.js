if (document.getElementById('menuOpener')) {
    const opener = document.getElementById('menuOpener');
    opener.addEventListener('click', () => {
        opener.classList.add('opener--active')
    })
    window.onclick = function (event) {
        if (event.target != opener && !event.target.classList.contains('checkSpan')) {
            opener.classList.remove("opener--active");
        }
    };
}