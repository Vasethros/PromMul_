

// Variable global para el reproductor de YouTube
var player;

// --- MÓDULO 1: Configuración de YouTube (API Externa) ---
// Esta función debe ser global para que la API de Google la encuentre.
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '100%',
        videoId: 'ER-uQg6lMc0', // ID del video
        events: {
            'onReady': iniciarControlesVideo // Llamamos a una función modular
        }
    });
}

// Inicializa los botones del video
function iniciarControlesVideo(event) {
    const btnPlay = document.getElementById('btn-play');
    const btnPause = document.getElementById('btn-pause');

    if (btnPlay && btnPause) {
        btnPlay.addEventListener('click', () => player.playVideo());
        btnPause.addEventListener('click', () => player.pauseVideo());
    }
}

// --- MÓDULO 2: Navegación (Tabs) ---
function iniciarNavegacion() {
    const links = document.querySelectorAll('nav a');
    const secciones = document.querySelectorAll('.contenido');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Limpieza visual
            links.forEach(l => l.classList.remove('active'));
            secciones.forEach(sec => sec.classList.remove('activo'));

            // Activación
            link.classList.add('active');
            const id = link.getAttribute('data-section');
            const seccion = document.getElementById(id);
            if (seccion) seccion.classList.add('activo');
        });
    });
}

// --- MÓDULO 3: Interactividad (Formularios y Extras) ---
function iniciarInteractividad() {
    // Botón de información
    const btnInfo = document.getElementById('btn-info');
    const info = document.getElementById('info');
    
    if (btnInfo && info) {
        btnInfo.addEventListener('click', () => {
            info.classList.toggle('oculto');
            btnInfo.textContent = info.classList.contains('oculto') 
                ? "Mostrar información" 
                : "Ocultar información";
        });
    }

    // Validación de formulario en tiempo real
    const inputNombre = document.getElementById("nombre");
    const errorNombre = document.getElementById("error-nombre");

    if (inputNombre && errorNombre) {
        inputNombre.addEventListener("input", () => {
            const esValido = inputNombre.value.trim() !== "";
            if (esValido) {
                errorNombre.classList.add("oculto");
                inputNombre.style.borderColor = "#28a745";
            } else {
                errorNombre.classList.remove("oculto");
                inputNombre.style.borderColor = "#e74c3c";
            }
        });
    }
}

// --- MÓDULO 4: Animaciones y Efectos ---
function iniciarAnimaciones() {
    const banner = document.getElementById('mensaje-bienvenida');
    if (banner) {
        setTimeout(() => {
            banner.classList.add('destacado-js');
            const h2 = banner.querySelector('h2');
            if (h2) h2.textContent = "¡Bienvenido!";
        }, 2000);
    }
}
/*(TRY...CATCH)
  Simulamos una función que intenta obtener un dato crítico (ej. Fecha)
  y capturamos cualquier posible error para que la página no falle. */

function cargarDatosSistema() {
    try {
        const yearSpan = document.getElementById('year');
        
        // Simulamos un error: Si el elemento no existe, lanzamos error manual
        if (!yearSpan) {
            throw new Error("El elemento 'year' no se encuentra en el DOM.");
        }
        
        // Si todo va bien:
        yearSpan.textContent = new Date().getFullYear();
        console.log("Sistema: Fecha actualizada correctamente.");

    } catch (error) {
        // Aquí "atrapamos" el error sin romper la página
        console.error("Error controlado en el sistema:", error.message);
        // Opcionalmente, podemos notificar al usuario de forma sutil 
        // document.body.append(" (Nota: No se pudo cargar el año)"); 
    }
}

// --- INICIALIZACIÓN MAESTRA ---
document.addEventListener('DOMContentLoaded', () => {
    // Llamamos a las funciones modulares
    iniciarNavegacion();
    iniciarInteractividad();
    iniciarAnimaciones();
    cargarDatosSistema(); // Aquí va el try...catch

    // Inyección del script de YouTube
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});