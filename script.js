const menu=document.getElementById('menu'),nav=document.querySelector('.nav');menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('#links a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
let active='all';const cards=[...document.querySelectorAll('.course')],search=document.getElementById('search'),empty=document.getElementById('empty');
function render(){let q=(search.value||'').toLowerCase().trim(),n=0;cards.forEach(c=>{let ok=(active==='all'||c.dataset.cat===active||c.dataset.level===active)&&(!q||c.dataset.name.includes(q)||c.textContent.toLowerCase().includes(q));c.style.display=ok?'block':'none';if(ok)n++});empty.classList.toggle('show',!n)}
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');active=b.dataset.filter;render()});search.oninput=render;
function demoForm(id,msg){document.getElementById(id).addEventListener('submit',e=>{e.preventDefault();if(!e.target.checkValidity()){e.target.reportValidity();return}const s=document.getElementById(msg);s.style.display='block';e.target.reset();setTimeout(()=>s.style.display='none',7000)})}
demoForm('application','appSuccess');demoForm('contactForm','contactSuccess');
