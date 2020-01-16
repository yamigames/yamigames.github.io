// Ignore ES6 lint issues
/*jshint esnext: true */


// Open Menu

const projectMenu = document.querySelector('#project-menu');
const menuOpen = document.querySelector('#top-nav');
const menuClose = document.querySelector('#top-nav-close');

menuOpen.addEventListener('click', function() {
  menuOpen.classList.toggle('open');
  projectMenu.classList.toggle('open');
  console.warn("Nav clicked."); 
}, false);

menuClose.addEventListener('click', function() {
  menuOpen.classList.remove('open');
  projectMenu.classList.remove('open');
  console.warn("Nav clicked."); 
}, false);