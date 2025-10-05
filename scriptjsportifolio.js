/* ================================ toogle icon navbar ================================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header nav a"); // Captura links de navegação

menuIcon.onclick = () => {
  // Alterna o ícone (menu para X) e a visibilidade da navbar
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Adiciona um evento de clique para fechar o menu ao selecionar um link (importante para mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove as classes de toggle se o menu estiver aberto
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});


/* ================================ scroll sections active link e sticky header ================================*/
let sections = document.querySelectorAll("section");
let header = document.querySelector("header"); // Move a declaração do header para fora do onscroll

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Ajuste para a altura do header
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // 1. Remove 'active' de todos os links
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      // 2. Adiciona 'active' apenas ao link da seção atual
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  /* ================================ sticky nav bar ================================*/
  // CORREÇÃO: 'window.scrolly' foi alterado para 'window.scrollY'
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ================ remove toggle icon and navbar when scroll (apenas para desktop) ==================*/
  // Essa lógica garante que, se o usuário estiver rolando e o menu mobile estiver aberto, ele feche.
  // A lógica de clique no link foi adicionada acima.
  if (menuIcon.classList.contains('bx-x')) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
  }
};

/* ================================ scroll reveal (Animações) ================================*/
ScrollReveal({
  // reset: true, // Removido 'reset: true' para evitar repetição excessiva em loops
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portifolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* ================================ typed js (Efeito de digitação) ================================*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Gym Rat", "Otaku"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
