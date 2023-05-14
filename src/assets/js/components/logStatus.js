if (localStorage.getItem('logged')) {
    console.log(localStorage.getItem('logged'));
    if (localStorage.getItem('logged') == 'true') {
        const account = document.querySelector('.account');
        account.classList.add('account--logged');
    }
}