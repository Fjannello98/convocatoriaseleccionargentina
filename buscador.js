

//El buscador rompe la lista de convocatoria. Aún no hace la búsqueda pero aparece bien. 
var results_storage = localStorage.getItem('busqueda');    
if (results_storage == null) {
    localStorage.setItem('busqueda','');
    var buscador_resultados = document.getElementById("buscador_resultados");
    buscador_resultados.innerHTML = ``;
} else {
    window.onload= function(){
        var buscador_resultados = document.getElementById("buscador_resultados");
        buscador_resultados.innerHTML = `<strong><span id="buscador_cantidad"></span></strong> resultados de búsqueda <strong><span id="buscador_key">${results_storage}<button type="button" class="close" onclick="Remove()">&times;</button></span>`;
    }
}
var busqueda = document.getElementById("buscador_input");

function Validar_busqueda(){
    var valor_de_busqueda = busqueda.value;
    if (valor_de_busqueda.trim() !== ''){
      Buscar_palabra(valor_de_busqueda);
    }
  }
  
function Buscar_palabra(valor_de_busqueda){
    localStorage.setItem('busqueda',valor_de_busqueda);
}


function Remove(){
   localStorage.removeItem('busqueda');
   var buscador_resultados = document.getElementById("buscador_resultados");
   buscador_resultados.innerHTML = ``;
}
