if (localStorage.getItem('logged')) {
    if (localStorage.getItem('logged') == 'true') {
        const account = document.querySelector('.account');
        const accountMobile = document.querySelector('.account-mobile');
        account.classList.add('account--logged');
        accountMobile.classList.add('account--logged');
    }
}