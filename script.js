const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.primary-nav');
button?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
  button.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded','false');
  button?.setAttribute('aria-label','Open navigation');
}));
