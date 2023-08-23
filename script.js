const navIcon = document.getElementById('nav-icon');
const navtab = document.getElementById('navtab');

navIcon.addEventListener('click', () => {
  navtab.classList.toggle('active');
});
