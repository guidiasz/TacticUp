const navToggle = document.querySelector(".cabecalho__hamburger");
const links = document.querySelector(".cabecalho__menu");

navToggle.addEventListener("click", function () {
  links.classList.toggle("cabecalho__menu--ativo");
});
