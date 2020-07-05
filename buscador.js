
var buscador_input = $("#buscador_input");
var buscador_button = $("#buscador_button");
var results= [];


buscador_button.click(function(event){
    localStorage.setItem("busqueda",buscador_input.val());     
})

$(document).ready(function(){
    var busqueda = localStorage.getItem("busqueda").toLowerCase().trim();
    if (busqueda !== ''){
      Search(busqueda);
      Filter_results(results);
      $("#buscador_resultados").append(`<strong class="mr-2"><span id="buscador_cantidad">${results.length}</span></strong> resultados de búsqueda <strong class="ml-2"><span id="buscador_key">${localStorage.getItem("busqueda")}<button type="button" class="close ml-2" onclick="Remove()">&times;</button></span>`);
    }
})


function Search(value){
    jugadores.forEach(function(jugador){
         if (jugador.nombre.toLowerCase().includes(value) == true){
             results.push(jugador);
         } 
    })

}

function Filter_results(value){
     var jugadores_cards = $(".arquero,.defensor,.volante,.delantero");  
     jugadores_cards.addClass("d-none");
     value.forEach(function(result){
         $(`#${result.camiseta}`).removeClass("d-none");
     })
}


function Remove(){
    localStorage.removeItem('busqueda');
    var buscador_resultados = $("#buscador_resultados");
    buscador_resultados.html(``);
    var jugadores_cards = $(".arquero,.defensor,.volante,.delantero"); 
    jugadores_cards.removeClass('d-none');
}