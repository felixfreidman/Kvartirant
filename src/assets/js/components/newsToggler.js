const newsTogglers = document.querySelectorAll('.news-control__toggler');
const newsBlocks = document.querySelectorAll('.news-box');

newsTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        switchLayout(toggler)
    })
})

function switchLayout(node) {
    console.log(node);
    if (node.classList.contains('showAsBlocks') && !node.classList.contains('news-control__toggler--active')) {
        shutTogglers();
        node.classList.add('news-control__toggler--active');
        newsBlocks.forEach(block => {
            block.classList.remove('news-box--49p');
            block.classList.add('news-box--32p');
        })
    } else if (node.classList.contains('showAsList') && !node.classList.contains('news-control__toggler--active')) {
        shutTogglers();
        node.classList.add('news-control__toggler--active');
        newsBlocks.forEach(block => {
            block.classList.add('news-box--49p');
            block.classList.remove('news-box--32p');
        })
    }
}

function shutTogglers() {
    newsTogglers.forEach(toggler => {
        toggler.classList.remove('news-control__toggler--active');
    })
}