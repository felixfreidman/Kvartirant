function activateLogout() {
    if (document.getElementById('menu-header')) {
        const menuHeaader = document.getElementById('menu-header');
        const logoutLink = menuHeaader.querySelector('a');
        const profileNavigation = document.getElementById('profileMenu');
        const logoutLinkInNav = document.createElement('a');
        logoutLinkInNav.href = logoutLink.href;
        logoutLinkInNav.textContent = 'Выйти'
        profileNavigation.append(logoutLinkInNav)

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