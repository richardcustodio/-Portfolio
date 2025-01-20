document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navLinks = document.querySelectorAll(".nav-links a");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open"); // Alterna a classe 'open' no menu
        const isOpen = menu.classList.contains("open");

        // Alterna os ícones
        menuIcon.style.display = isOpen ? "none" : "block";
        closeIcon.style.display = isOpen ? "block" : "none";
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        });
    });
});


