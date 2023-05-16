
const allNextButtons = document.querySelectorAll('.pref-slide__button');
const allSlides = document.querySelectorAll('.pref-slide');
allNextButtons.forEach((button, index) => {
    if (index !== 2) {
        button.addEventListener('click', () => {
            allSlides[index].classList.add('js--hidden');
            allSlides[index + 1].classList.remove('js--hidden');
        })
    }
})
