const header = document.querySelector('.cabecalho');
const hamburger = header.querySelector('.cabecalho__hamburger');
const menu = header.querySelector('.cabecalho__menu')
const links = header.querySelectorAll('.cabecalho__link');

hamburger.addEventListener('click', function () {
  header.classList.toggle('ativo');
  menu.classList.toggle('ativo');
});

links.forEach(link => {
  link.addEventListener('click', function (){
    menu.classList.toggle('ativo');
    header.classList.toggle('ativo');
  });  
});

