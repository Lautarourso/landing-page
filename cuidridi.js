const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const registerBtn = document.getElementById('btnRegistrar');
const closeRegistro = document.getElementById('closeRegistro');


contactBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


registerBtn.addEventListener('click', () => {
    modalRegistro.style.display = 'flex';
});

// cerrar modal al tocar la X
closeRegistro.addEventListener('click', () => {
    modalRegistro.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }   
});




//registerBtn.addEventListener('click', () => {
    //window.open ('https://proyecto-zvzl.onrender.com', "_blank");
//});


document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const arrow = button.querySelector(".arrow");

        // cerrar todas las demás
        document.querySelectorAll(".faq-answer").forEach(ans => {
            if (ans !== answer) ans.style.display = "none";
        });
        document.querySelectorAll(".arrow").forEach(arr => {
            if (arr !== arrow) arr.classList.remove("rotate");
        });

        // alternar la seleccionada
        const isOpen = answer.style.display === "block";
        answer.style.display = isOpen ? "none" : "block";
        arrow.classList.toggle("rotate", !isOpen);
    });
});