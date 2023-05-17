function activateForms() {
    if (document.querySelector('.signin-form')) {
        const signinForm = document.querySelector('.signin-form');
        const signupForm = document.querySelector('.signup-form');
        const captionIn = signinForm.querySelector('.caption');
        const captionUp = signupForm.querySelector('.caption');
        captionIn.addEventListener('click', () => {
            signinForm.classList.add('js--hidden');
            signupForm.classList.remove('js--hidden');
        })
        captionUp.addEventListener('click', () => {
            signinForm.classList.remove('js--hidden');
            signupForm.classList.add('js--hidden');
        })
    }
}

setTimeout(activateForms, 300)