// ====================================
// CONFIGURAÇÃO DO WHATSAPP
// ====================================

const telefoneWhatsApp = "5511987654321";

const mensagemWhatsApp =
    "Olá! Gostaria de solicitar um orçamento para serviços de limpeza.";

const linkWhatsApp =
    `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;


// Adiciona o link aos botões de WhatsApp
document.querySelectorAll(".whatsapp-link").forEach((botao) => {
    botao.href = linkWhatsApp;
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
});


// ====================================
// MENU RESPONSIVO
// ====================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    const menuAberto = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(menuAberto));

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.innerHTML = menuAberto
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});


// Fecha o menu ao clicar em um link de navegação
navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    });
});


// ====================================
// ANO AUTOMÁTICO NO RODAPÉ
// ====================================

document.getElementById("current-year").textContent =
    new Date().getFullYear();
