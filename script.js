document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const profileToggle = document.getElementById('profile-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('show');
    });
    
    profileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    
    document.addEventListener('click', () => {
        navMenu.classList.remove('show');
        dropdownMenu.classList.remove('show');
    });
    
});
