const toggleBtn = document.getElementById('LDmode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    toggleBtn.classList.toggle('dark-active');
});
