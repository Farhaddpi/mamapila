// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Language toggle — swaps text for elements that carry both translations.
// Note: we intentionally do NOT flip the whole document to RTL, because that
// breaks the LTR grid layout. We only switch the lang attribute + translated text.
document.querySelectorAll('.lang').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.lang').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const lang = btn.dataset.lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-fa', lang === 'fa');
  document.querySelectorAll('[data-en][data-fa]').forEach(el => {
    el.textContent = el.dataset[lang];
    el.dir = lang === 'fa' ? 'rtl' : 'ltr';
  });
}));

// Branded placeholder so the layout never collapses if an image asset is missing.
function brandedPlaceholder(label) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0' stop-color='#1a3b29'/><stop offset='1' stop-color='#081f15'/></linearGradient></defs>
    <rect width='800' height='600' fill='url(#g)'/>
    <rect x='18' y='18' width='764' height='564' fill='none' stroke='#d4a24b' stroke-width='3' rx='24'/>
    <text x='400' y='300' fill='#ffd89c' font-family='Georgia,serif' font-size='52' font-weight='700' text-anchor='middle'>Mama Pila</text>
    <text x='400' y='350' fill='#f7c37f' font-family='sans-serif' font-size='22' text-anchor='middle'>${label}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = '1';
    img.src = brandedPlaceholder('Image coming soon');
  }, { once: true });
});

// Videos: if a source fails, show the poster cleanly instead of a broken player.
document.querySelectorAll('video').forEach(v => {
  v.addEventListener('error', () => {
    console.warn('Video failed to load:', v.currentSrc || v.querySelector('source')?.src);
    v.classList.add('media-missing');
  });
});
