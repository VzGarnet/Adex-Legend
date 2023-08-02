const sideMenu = document.querySelector('.side-menu input');
const nav = document.querySelector('nav ul');

sideMenu.addEventListener('click', function(){
  nav.classList.toggle('slide');
});