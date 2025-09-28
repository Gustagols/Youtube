const hamburguerButton = document.querySelector('.hamburguer-icon-container');
const sidebar = document.querySelector('.sidebar');
const sidebarLink = document.querySelectorAll('.sidebar-link');
const sidebarText = document.querySelectorAll('.sidebar-icon-text');

hamburguerButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    sidebarLink.forEach(icon => {
    icon.classList.toggle('active');
    });

    sidebarText.forEach(text => {
    text.classList.toggle('active');
    });

});
