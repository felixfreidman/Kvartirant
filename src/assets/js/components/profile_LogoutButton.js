function activateLogout() {
    if (document.getElementById('menu-header')) {
        const menuHeaader = document.getElementById('menu-header');
        const logoutLink = menuHeaader.querySelector('a');
        const logoutLinkInNav = document.getElementById('logoutLink');
        logoutLinkInNav.href = logoutLink.href;

        logoutLinkInNav.addEventListener('click', () => {
            if (localStorage.getItem('logged')) {
                localStorage.setItem('logged', false);
                const account = document.querySelector('.account');
                account.classList.remove('account--logged');
            }
        })
    }
}

setTimeout(activateLogout, 300)