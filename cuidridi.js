const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const registerBtn = document.getElementById('btnRegistrar');


contactBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});



window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }   
});




registerBtn.addEventListener('click', () => {
    window.open ('https://proyecto-zvzl.onrender.com', "_blank");
});



document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;

        // Cerrar todas las demás
        document.querySelectorAll(".faq-item").forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        // Alternar la actual
        item.classList.toggle("active");
    });
});
