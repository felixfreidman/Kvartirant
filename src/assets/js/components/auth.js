function activateForms() {
    if (document.querySelector('.signin-form')) {
        const signinForm = document.querySelector('.signin-form');
        const signupForm = document.querySelector('.signup-form');
        const captionIn = signinForm.querySelector('.caption');
        const captionUp = signupForm.querySelector('.caption');
        const formSignInReal = document.getElementById('signin-special');
        const formSignUpReal = document.getElementById('signup-special');
        captionIn.addEventListener('click', () => {
            signinForm.classList.add('js--hidden');
            signupForm.classList.remove('js--hidden');
        })
        captionUp.addEventListener('click', () => {
            signinForm.classList.remove('js--hidden');
            signupForm.classList.add('js--hidden');
        })

        formSignInReal.addEventListener('click', () => {
            localStorage.setItem('logged', true);
        })
        formSignUpReal.addEventListener('click', () => {
            localStorage.setItem('logged', true)
        })
    }
}

setTimeout(activateForms, 300)