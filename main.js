$('.plus-btn').click(function(){
    $('body').toggleClass('menu-open');
  }); 
  function ocultarContenido() {
    var elemento = document.getElementById('contenido');
    if (elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
    } else if (elemento.style.display == "none"){
        elemento.style.display = "block";
    }
}