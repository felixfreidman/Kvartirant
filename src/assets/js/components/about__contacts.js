if (document.querySelector('.about-container__structure-container')) {
    const allStructireContainers = document.querySelectorAll('.about-container__structure-container');
    allStructireContainers.forEach(container => {
        container.addEventListener('click', () => {
            toggleContainer(container)
        });
    })
}

function toggleContainer(node) {
    if (!node.classList.contains('about-container__structure-container--active-tab')) {
        node.classList.add('about-container__structure-container--active-tab');
    } else {
        node.classList.remove('about-container__structure-container--active-tab');
    }
}