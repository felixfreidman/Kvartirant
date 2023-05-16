if (window.location.href.includes('prefs')) {
    const allNextButtons = document.querySelectorAll('.pref-slide__button');
    const allSlides = document.querySelectorAll('.pref-slide');
    allNextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            allSlides[index].classList.add('js--hidden');
            allSlides[index + 1].classList.remove('js--hidden');
        })
    })
}