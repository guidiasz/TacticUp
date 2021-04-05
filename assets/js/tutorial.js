const tabs = document.querySelectorAll('.tutorial__botao');
const secoes = document.querySelectorAll('.tutorial__secao');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    removeAtivoTab();
    addAtivoTab(tab);
  });
})

const removeAtivoTab = () => {
  tabs.forEach(tab => {
    tab.classList.remove('ativo');
  });
  secoes.forEach(secao => {
    secao.classList.remove('ativo');
  });
}

const addAtivoTab = tab => {
  tab.classList.add('ativo');
  const href = tab.getAttribute('href');
  const secaoCorrespondente = document.querySelector(href);
  secaoCorrespondente.classList.add('ativo');
}