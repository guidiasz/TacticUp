const acordeao = document.getElementsByClassName('metodologia__acordeao');
let ativo = null;
let i;

for (i = 0; i < acordeao.length; i++) {
  acordeao[i].addEventListener('click', function () {

    if (ativo) {
      if (ativo !== this) {
        ativo.classList.remove('ativo');
        const painel = ativo.nextElementSibling;
        if (painel.style.maxHeight) {
          painel.style.maxHeight = null;
        }
      }
    }

    this.classList.toggle("ativo");
    ativo = this;

    const painel = this.nextElementSibling;
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    }
  });
}