const menu = document.querySelector('.menu ul');
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.setAttribute('aria-label', 'Abrir menu');
menuToggle.innerHTML = '&#9776;';

const navBar = document.querySelector('.nav-bar');
navBar.insertBefore(menuToggle, navBar.querySelector('.menu'));

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if(menu.classList.contains('active')){
      menu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
