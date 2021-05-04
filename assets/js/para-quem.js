function resetScroll() {
  paraQuemBotoesContainer.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  paraQuemItensContainer.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function setPosicaoItens() {
  let i = 0;
  for (i; i < paraQuemBotoes.length; i++) {
    paraQuemBotoes[i].posEsquerda = paraQuemBotoes[i].getBoundingClientRect().left;
    paraQuemItens[i].posEsquerda = paraQuemItens[i].getBoundingClientRect().left;
  }
}

function desativaBotao() {
  let i = 0;
  for (i; i < paraQuemBotoes.length; i++) {
    if (paraQuemBotoes[i].classList.contains('ativo')) {
      paraQuemBotoes[i].classList.remove('ativo');
      break;
    }
  }
}

function scrollItem(indice) {
  paraQuemItensContainer.scroll({
    top: 0,
    left: paraQuemItens[indice].posEsquerda - paraQuemItens[0].posEsquerda,
    behavior: 'smooth'
  });
}

function addEventoBotoes() {
  paraQuemBotoes.forEach(function (botao, indice) {
    botao.indice = indice;
    botao.addEventListener('click', function () {
      desativaBotao();
      botao.classList.toggle('ativo');

      paraQuemBotoesContainer.scroll({
        top: 0,
        left: botao.posEsquerda - 64,
        behavior: 'smooth'
      });
      scrollItem(botao.indice);
    });
  });

}

window.addEventListener("resize", debounce(function (event) {
  setPosicaoItens();
  resetScroll();
  desativaBotao();
  paraQuemBotoes[0].classList.toggle('ativo')
}, 500))

const paraQuem = document.querySelector('.para-quem');

const paraQuemBotoes = paraQuem.querySelectorAll('.para-quem__botao');
const paraQuemBotoesContainer = paraQuem.querySelector('.para-quem__botoes');
const pontoInicial = paraQuemBotoes[0].getBoundingClientRect().left;

const paraQuemItens = paraQuem.querySelectorAll('.para-quem__item');
const paraQuemItensContainer = paraQuem.querySelector('.para-quem__itens');

resetScroll();
setPosicaoItens();
addEventoBotoes();