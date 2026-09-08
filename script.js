const modal = document.getElementById('contactModal');
const form = document.getElementById('contactForm');
const openButtons = document.querySelectorAll('.open-contact');
const closeButtons = document.querySelectorAll('[data-close]');

function openModal(){
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('name').focus(), 250);
}
function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
openButtons.forEach(btn => btn.addEventListener('click', openModal));
closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const gymName = document.getElementById('gymName').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();

  const message = `Hello GymHQ Team! 👋\n\nI'm interested in learning more about GymHQ.\n\n*Name:* ${name}\n*Gym Name:* ${gymName}\n*City:* ${city}\n*State:* ${state}\n\nPlease connect with me regarding GymHQ.`;
  const url = `https://wa.me/918076831603?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{ threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

// Subtle parallax for pointer devices.
if (window.matchMedia('(pointer:fine)').matches) {
  const visual = document.querySelector('.hero-visual');
  visual?.addEventListener('mousemove', e => {
    const r = visual.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    visual.style.transform = `translate3d(${x * 7}px, ${y * 7}px, 0)`;
  });
  visual?.addEventListener('mouseleave', () => visual.style.transform = '');
}
