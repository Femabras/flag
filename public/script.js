function showMobileMenu() {
    let mobileMenu = document.querySelector("mobile-list");
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    }else {
        mobileMenu.classList.add('open')
    }
}