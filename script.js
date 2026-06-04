// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Branded placeholder so the layout never collapses if an image asset is missing.
function brandedPlaceholder() {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0' stop-color='#1a3b29'/><stop offset='1' stop-color='#081f15'/></linearGradient></defs>
    <rect width='800' height='600' fill='url(#g)'/>
    <rect x='18' y='18' width='764' height='564' fill='none' stroke='#d4a24b' stroke-width='3' rx='24'/>
    <text x='400' y='312' fill='#ffd89c' font-family='Georgia,serif' font-size='54' font-weight='700' text-anchor='middle'>Mama Pila</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    if (img.dataset.fb) return;
    img.dataset.fb = '1';
    img.src = brandedPlaceholder();
  }, { once: true });
});

// Videos: if a source fails to load, fail quietly (poster stays visible).
document.querySelectorAll('video').forEach(v => {
  v.addEventListener('error', () => v.classList.add('media-missing'));
});
