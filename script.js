// --- Navegación simbólica ---
const links = document.querySelectorAll('nav a');
const secciones = document.querySelectorAll('.contenido');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Oculta todas las secciones
    secciones.forEach(sec => sec.classList.remove('activo'));

    // Muestra la sección correspondiente
    const id = link.getAttribute('data-section');
    document.getElementById(id).classList.add('activo');
  });
});

// --- Interacción con hipermedios ---
const btnInfo = document.getElementById('btn-info');
const info = document.getElementById('info');

btnInfo.addEventListener('click', () => {
  info.classList.toggle('oculto');
});

 document.getElementById('year').textContent = new Date().getFullYear();

 