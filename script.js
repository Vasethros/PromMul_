var player;


function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '100%',
    videoId: 'ER-uQg6lMc0', 
    events: {
      'onReady': onPlayerReady
    }
  });
}


function onPlayerReady(event) {
  const btnPlay = document.getElementById('btn-play');
  const btnPause = document.getElementById('btn-pause');

  if(btnPlay && btnPause) {
    btnPlay.addEventListener('click', () => {
      player.playVideo(); 
    });

    btnPause.addEventListener('click', () => {
      player.pauseVideo(); 
    });
  }
}


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



document.addEventListener('DOMContentLoaded', () => {
    
  // Navegación 
  const links = document.querySelectorAll('nav a');
  const secciones = document.querySelectorAll('.contenido');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      secciones.forEach(sec => sec.classList.remove('activo'));
      const id = link.getAttribute('data-section');
      const seccion = document.getElementById(id);
      if (seccion) seccion.classList.add('activo');
    });
  });

  // Banner de bienvenida
  const banner = document.getElementById('mensaje-bienvenida');
  if(banner) {
    setTimeout(() => {
      banner.classList.add('destacado-js');
      const h2 = banner.querySelector('h2');
      if(h2) h2.textContent = "¡Bienvenido!";
    }, 2000);
  }

  // Toggle información de contacto
  const btnInfo = document.getElementById('btn-info');
  const info = document.getElementById('info');
  if (btnInfo && info) {
    btnInfo.addEventListener('click', () => {
      info.classList.toggle('oculto');
      btnInfo.textContent = info.classList.contains('oculto') ? "Mostrar información" : "Ocultar información";
    });
  }

  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const inputNombre = document.getElementById("nombre");
  const errorNombre = document.getElementById("error-nombre");
  if (inputNombre && errorNombre) {
    inputNombre.addEventListener("input", () => {
      if (inputNombre.value.trim() !== "") {
        errorNombre.classList.add("oculto");
        inputNombre.style.borderColor = "#28a745";
      } else {
        errorNombre.classList.remove("oculto");
        inputNombre.style.borderColor = "#e74c3c";
      }
    });
  }
});