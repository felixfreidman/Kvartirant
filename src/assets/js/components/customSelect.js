if (document.getElementById('customSelect')) {

    const customSelect = document.getElementById('customSelect');
    const selectContainer = document.querySelector('.pref-slide__select-container');
    const selectOptions = selectContainer.querySelectorAll('.pref-slide__option');
    let savedString = customSelect.textContent;

    customSelect.addEventListener('click', () => {
        setTimeout(function () {
            selectContainer.classList.remove('js--hidden');
        }, 100);
    })

    window.onclick = function (event) {
        if (event.target != selectContainer && !event.target.classList.contains('pref-slide__option') && !event.target.classList.contains('pref-slide__select')) {
            selectContainer.classList.add("js--hidden");
        }
    };


    selectOptions.forEach((option, index) => {
        option.addEventListener('click', () => {
            if (index != 0) {
                selectOptions[0].classList.remove('pref-slide__option--active')
                option.classList.toggle('pref-slide__option--active');
                customSelect.textContent = customSelect.textContent.replace('Все районы', '');
                if (customSelect.textContent == '') {
                    customSelect.textContent = `${option.textContent.slice(0, 5)}`
                } else {
                    customSelect.textContent = `${customSelect.textContent}, ${option.textContent.slice(0, 5)}`
                }
            } else {
                selectOptions.forEach((inner_option) => {
                    inner_option.classList.remove('pref-slide__option--active')
                });
                option.classList.add('pref-slide__option--active');
                customSelect.textContent = 'Все районы';

            }
        })
    })
}