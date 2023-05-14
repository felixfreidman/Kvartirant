const pageLocation = window.location.href;

if (pageLocation.includes('profile')) {
    const allNavLinks = document.querySelectorAll('.profile-navigation__link');
    allNavLinks.forEach(link => {
        if (link.href.includes('account-profile')
            && pageLocation.includes('account-profile')) {
            link.classList.add('profile-navigation__link--active');
        }
        if (link.href.includes('subscription-profile')
            && pageLocation.includes('subscription-profile')) {
            link.classList.add('profile-navigation__link--active');
        }
        if (link.href.includes('settings-profile')
            && pageLocation.includes('settings-profile')) {
            link.classList.add('profile-navigation__link--active');
        }
    })
}