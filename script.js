// Modal: abrir y cerrar
const modal = document.getElementById('modal');
const modoBtn = document.getElementById('modoBtn');

function mostrarModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    cerrarModal();
  }
}

// Cambio modo claro/oscuro
modoBtn.addEventListener('click', () => {
document.body.classList.toggle('dark');
  modoBtn.textContent = document.body.classList.contains('dark') ? 'Modo Claro' : 'Modo Oscuro';
});