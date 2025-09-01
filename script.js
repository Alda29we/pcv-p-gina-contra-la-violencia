// Animación de entrada para el Hero
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(30px)";
  setTimeout(() => {
    heroText.style.transition = "all 1.5s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 300);
});

// Scroll suave en menú
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
