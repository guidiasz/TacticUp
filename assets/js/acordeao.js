const acordeao = document.getElementsByClassName("metodologia__acordeao");
let i;

for (i = 0; i < acordeao.length; i++) {
  acordeao[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("ativo");

    /* Toggle between hiding and showing the active panel */
    const painel = this.nextElementSibling;
    console.log(painel);
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    }
  });
} 