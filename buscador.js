/* 
var buscador_input = $("#buscador_input");
var buscador_button = $("#buscador_button");

localStorage.setItem("busqueda","");

buscador_button.click(function(event){
     localStorage.setItem("busqueda",buscador_input.value);
})

$(document).ready(function(){
    var results_storage = localStorage.getItem("busqueda");
    var encontrado = search(results_storage);

})

function search(value){
    var results= [];
    var search_values = $(".search_value");
    search_values.forEach(function(search_value){
         if (search_value.toLowerCase().includes(value.toLowerCase())){
             results.push(search_value)
         }
    })
    return results;
}
*/