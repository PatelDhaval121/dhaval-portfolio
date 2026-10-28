const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
const copyButton = document.querySelector('#copy-email');
copyButton.addEventListener('click', async () => {
  const template = 'Hello Dhaval, I came across your developer portfolio and would like to connect about an opportunity/project.';
  try {
    await navigator.clipboard.writeText(template);
    copyButton.innerHTML = 'Template copied <span>✓</span>';
  } catch {
    window.prompt('Copy this message:', template);
  }
});
// Reveal sections gently as they enter the viewport.
const revealTargets = document.querySelectorAll('.skill-card, .project-card, .timeline article');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  revealTargets.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}
