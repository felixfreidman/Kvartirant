const pageLocation = window.location.href;
const props = ['Ваш профиль', 'Ваши сообщения'];

if (pageLocation.includes('profile') || pageLocation.includes('subscription')) {
    const allNavLinks = document.querySelectorAll('.profile-navigation__link');
    const sectionHeader = document.getElementById('ProfileHeader');
    const avatarFrame = document.querySelector('.lk-sidebar')
    allNavLinks.forEach((link, index) => {
        if (index !== 4) {
            if (link.href.includes('tab=chat')
                && pageLocation.includes('tab=chat')) {
                link.classList.add('profile-navigation__link--active');
                sectionHeader.textContent = props[1];
                avatarFrame.classList.add('js--hidden')
            } else if (link.href.includes('user') && !link.href.includes('chat')
                && pageLocation.includes('user') && !pageLocation.includes('chat')) {
                link.classList.add('profile-navigation__link--active');
                sectionHeader.textContent = props[0];
            } else if (link.href.includes('subscription')
                && pageLocation.includes('subscription')) {
                link.classList.add('profile-navigation__link--active');
            }
        }
    })
}