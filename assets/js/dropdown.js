const botaoDropdown = document.querySelector('#botaoDropdown');

botaoDropdown.addEventListener('click', function(event){
  console.log('chamou abre dropdown')
  document.getElementById("dropdown").classList.toggle("exibe");
  event.stopPropagation();
}, false);

window.addEventListener('click', function(event){
  // if (!event.target.matches('#botaoDropdown')) {
    var dropdowns = document.getElementsByClassName("cabecalho__subitens");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('exibe')) {
        openDropdown.classList.remove('exibe');
      }
    }
  // }
}, false);
