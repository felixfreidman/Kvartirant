const editIcons = document.querySelectorAll('.change-icon');

editIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const ID = icon.id;

        if (ID !== 'changePassword') {
            const editValueContainer = document.querySelector(`.${ID}`);
            const valueTextContainer = editValueContainer.querySelector('span');
            const value = valueTextContainer.textContent.trim();
            const editInput = document.createElement('input');


            valueTextContainer.classList.add('js--hidden');
            icon.classList.add('js--hidden');
            editInput.value = value;
            editInput.type = 'text';
            editInput.classList.add('editInput');
            editValueContainer.appendChild(editInput);
        } else {
            const editValueContainer = document.querySelector(`.${ID}`);
            const valueContainer = editValueContainer.querySelector('.info-value');
            const labelContainer = editValueContainer.querySelector('.info-label');
            const passwordContainer = editValueContainer.querySelector('.info-password')
            valueContainer.classList.add('js--hidden');
            labelContainer.classList.add('js--hidden');
            passwordContainer.classList.remove('js--hidden');
        }
    })
})