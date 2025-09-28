const hamburguerButton = document.querySelector('.hamburguer-icon-container');
const sidebar = document.querySelector('.sidebar');

hamburguerButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
});

