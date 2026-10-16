// ---------- CONFIGURACIÓN (puedes editar) ----------
// Pon aquí las imágenes de la galería. Si una falla, se muestra un bloque de color.
const IMAGENES = [
  { titulo: "Modo Diablo", texto: "Portada del proyecto con YSY A y Neo Pistea.", color: "linear-gradient(135deg,#ff2e88,#8b0000)", src: "" },
  { titulo: "Live Show", texto: "La energía de Duki en vivo.", color: "linear-gradient(135deg,#ff7a00,#ffe600)", src: "" },
  { titulo: "Khea", texto: "Colaboración con Khea.", color: "linear-gradient(135deg,#00e5ff,#8b5cf6)", src: "" },
  { titulo: "C.R.O", texto: "Un tema con C.R.O.", color: "linear-gradient(135deg,#8b5cf6,#ff2e88)", src: "" }
];

// Pon aquí IDs de videos de YouTube (la parte después de ?v=)
const VIDEOS = [
  { titulo: "EN ODIO", id: "UuZFVAFouuk" },
  { titulo: "LEX LUTHOR", id: "kuBUKVrObkM" }
];

const TEMAS = ["Modo Diablo - Intro", "Modo Diablo - Fuego", "Modo Diablo - Ft. YSY A", "Modo Diablo - Ft. Neo Pistea"];
const FRASES = [
  "Fuego en cada verso.",
  "Modo Diablo activado.",
  "Trap argentino, sin filtros.",
  "El flow que nadie puede copiar.",
  "De la calle al estadio."
];

// ---------- GALERÍA ----------
const grid = document.getElementById('galeriaGrid');
IMAGENES.forEach(img => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.background = img.color;
  card.innerHTML = `
    ${img.src ? `<img src="${img.src}" alt="${img.titulo}" onerror="this.remove()">` : ''}
    <div class="cover-txt">${img.titulo}</div>
    <div class="overlay"><h3>${img.titulo}</h3><p>${img.texto}</p></div>`;
  card.onclick = () => mostrarInfo(img.titulo, img.texto);
  grid.appendChild(card);
});

// ---------- VIDEOS ----------
const vGrid = document.getElementById('videosGrid');
VIDEOS.forEach(v => {
  const box = document.createElement('div');
  box.className = 'video-box';
  box.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.titulo}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>${v.titulo}</p>`;
  vGrid.appendChild(box);
});

// ---------- REPRODUCTOR SIMULADO ----------
let indice = 0, sonando = false;
function togglePlay() {
  sonando = !sonando;
  document.getElementById('playerBox').classList.toggle('playing', sonando);
  document.getElementById('btnPlay').textContent = sonando ? '⏸' : '▶';
}
function cambiarTema(d) {
  indice = (indice + d + TEMAS.length) % TEMAS.length;
  document.getElementById('tema').textContent = TEMAS[indice];
}

// ---------- FRASES ----------
function nuevaFrase() {
  const el = document.getElementById('frase');
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = '"' + FRASES[Math.floor(Math.random() * FRASES.length)] + '"';
    el.style.opacity = 1;
  }, 400);
}

// ---------- LIGHTBOX ----------
function mostrarInfo(titulo, texto) {
  document.getElementById('lbTitulo').textContent = titulo;
  document.getElementById('lbTexto').textContent = texto;
  document.getElementById('lightbox').classList.add('open');
}
function cerrarLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
