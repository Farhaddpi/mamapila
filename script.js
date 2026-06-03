window.addEventListener('load',()=>document.querySelector('.loader').classList.add('hide'));
const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
let fa=false;const btn=document.getElementById('langBtn');
function switchLang(){fa=!fa;document.body.classList.toggle('fa-mode',fa);document.documentElement.lang=fa?'fa':'en';document.documentElement.dir=fa?'rtl':'ltr';btn.textContent=fa?'EN':'FA';document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=fa?el.dataset.fa:el.dataset.en});}
btn.addEventListener('click',switchLang);
const modal=document.getElementById('videoModal'),video=document.getElementById('modalVideo');
document.querySelectorAll('.play').forEach(b=>b.addEventListener('click',()=>{video.src=b.dataset.video;modal.classList.add('show');video.play()}));
document.getElementById('closeModal').addEventListener('click',()=>{video.pause();video.src='';modal.classList.remove('show')});
