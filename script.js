const io = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('.lang').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.lang').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const lang=btn.dataset.lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='fa'?'rtl':'ltr';
  document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang]});
}));

// Help GitHub Pages autoplay gracefully: if video autoplay is blocked, poster still shows and controls sections work.
document.querySelectorAll('video').forEach(v=>{v.addEventListener('error',()=>{console.warn('Video failed to load:', v.currentSrc)})});
