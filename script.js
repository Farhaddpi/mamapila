document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.13});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('nav a,.brand').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
