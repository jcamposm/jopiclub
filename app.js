const workshops = [
  {name:'Peques en Acción',area:'Autonomía y motricidad',age:'3 a 5 años',groups:['3'],day:'Lunes · 11:10 a 12:00',icon:'✳',color:'#e4edcc'},
  {name:'Letras al Rescate',area:'Lecto-escritura',age:'4 a 6 años',groups:['3','6'],day:'Mar y jue · 16:40 a 17:30',icon:'Aa',color:'#f8dacc'},
  {name:'Mini Mundos',area:'Cocina y juego simbólico',age:'3 a 7 años',groups:['3','6'],day:'Viernes · 16:40 a 17:30',icon:'✿',color:'#e5ddf3'},
  {name:'¡Hello, Hi!',area:'Inglés inicial',age:'3 a 7 años',groups:['3','6'],day:'Miércoles · 15:50 a 16:30',icon:'☺',color:'#f4e3ac'},
  {name:'ExploraMentes',area:'Lenguaje · 1° básico',age:'6 a 7 años',groups:['6'],day:'Lunes · 15:50 a 16:30',icon:'✧',color:'#dbe9ef'},
  {name:'Genios Curiosos',area:'Matemáticas · 1° básico',age:'6 a 7 años',groups:['6'],day:'Jueves · 15:50 a 16:30',icon:'123',color:'#f5dcde'}
];
const grid = document.querySelector('#workshop-grid');
workshops.forEach(w => {
 const article=document.createElement('article'); article.className='workshop'; article.dataset.groups=w.groups.join(',');
 article.innerHTML=`<div class="workshop-top"><span style="color:#445745;background:${w.color};border-radius:14px;padding:8px 12px;font-weight:800;font-family:Nunito,sans-serif" aria-hidden="true">${w.icon}</span><span class="age">${w.age}</span></div><h3>${w.name}</h3><p>${w.area}</p><div class="schedule"><span>${w.day} h</span><a href="https://jopiclub.cl/inscribirse/" aria-label="Inscribirse en ${w.name}">→</a></div>`;
 grid.append(article);
});
document.querySelectorAll('[data-age]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-age]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelectorAll('.workshop').forEach(card=>card.hidden=button.dataset.age!=='all'&&!card.dataset.groups.split(',').includes(button.dataset.age));
}));
const menu=document.querySelector('.menu-toggle');const navigation=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navigation.classList.contains('open')){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
