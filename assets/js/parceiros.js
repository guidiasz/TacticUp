let root = document.documentElement;
const listaParceiros = document.querySelector('.parceiros__lista');
const parceiros = listaParceiros.querySelectorAll('.parceiros__item');

const tamanhoTela = window.matchMedia('(min-width: 700px)');

function setLarguraParceiros() {
  let larguraTotal = 0;
  let i = 0;
  const qtddParceiros = parceiros.length / 2;

  for (i; i < qtddParceiros; i++) {
    larguraTotal += parceiros[i].getBoundingClientRect().width;
  }

  if (tamanhoTela.matches) {
    root.style.setProperty('--tamanho-lista-de-parceiros', -larguraTotal + "px");
    listaParceiros.style.animation = 'scrollDesktop 14s infinite linear';
  }
  else {
    root.style.setProperty('--tamanho-lista-de-parceiros-mobile', -larguraTotal + "px");
    listaParceiros.style.animation = 'scrollMobile 14s infinite linear';
  }
}

window.addEventListener('load', setLarguraParceiros);

tamanhoTela.addEventListener('change', setLarguraParceiros);
