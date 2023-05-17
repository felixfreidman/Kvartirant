if (document.getElementById('customSelect')) {
    const userArea = document.querySelector('.userArea');
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
                selectOptions[0].classList.remove('pref-slide__option--active');
                if (option.classList.contains('pref-slide__option--active')) {
                    option.classList.remove('pref-slide__option--active');
                    if (customSelect.textContent.includes(`, ${option.textContent.slice(0, 5)}`)) {
                        customSelect.textContent = customSelect.textContent.replace(`, ${option.textContent.slice(0, 5)}`, '');
                    } else {
                        customSelect.textContent = customSelect.textContent.replace(`${option.textContent.slice(0, 5)}`, '');
                    }
                    if (customSelect.textContent.trim() == '') {
                        customSelect.textContent = 'Все районы';
                        selectOptions[0].classList.add('pref-slide__option--active');
                    }
                } else if (!option.classList.contains('pref-slide__option--active')) {
                    option.classList.add('pref-slide__option--active');
                    customSelect.textContent = customSelect.textContent.replace('Все районы', '');
                    customSelect.textContent = `${customSelect.textContent} ${option.textContent.slice(0, 5)}`
                } else {
                    option.classList.add('pref-slide__option--active');
                    customSelect.textContent = customSelect.textContent.replace('Все районы', '');
                    if (customSelect.textContent == '') {
                        customSelect.textContent = `${option.textContent.slice(0, 5)}`
                    } else {
                        customSelect.textContent = `${customSelect.textContent}, ${option.textContent.slice(0, 5)}`
                    }
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

    if (userArea.textContent !== '') {
        customSelect.textContent = userArea.textContent;
        selectOptions.forEach(option => {
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
        })
    }
}