let root = document.documentElement;
const parceiros = document.querySelectorAll('.parceiros__item');

const tamanhoTela = window.matchMedia('(min-width: 700px)');

function setLarguraParceiros() {
  console.log('chamou');
  let larguraTotal = 0;
  let i = 0;
  const qtddParceiros = parceiros.length / 2;

  for (i; i < qtddParceiros; i++) {
    larguraTotal += parceiros[i].getBoundingClientRect().width;
  }

  root.style.setProperty('--tamanho-lista-de-parceiros', -larguraTotal + "px");
}

window.addEventListener('load', setLarguraParceiros);

tamanhoTela.addEventListener('change', setLarguraParceiros);
