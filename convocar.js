// BUGS PENDIENTES
/*
1) Pasos a seguir en convocatoria con AJAX y breadcrumb 
*/
var convocatoria = [];
var convocados_guardados = [];
var arqueros_convocados=[];
var defensores_convocados=[];
var volantes_convocados=[];
var delanteros_convocados=[];

$(document).ready(function getStorage(){
   convocados_guardados = JSON.parse(localStorage.getItem('convocatoria'));
   if (convocados_guardados !== null){
      Llenar_lista();
   }
})





// Función Convocar
var botones_convocar = $(".boton_convocar");
botones_convocar.click(function(event){
switch (convocados_guardados){
  case null:
    jugadores.forEach(function(jugador){
      var boton_index = $(event.target).data("camiseta");
      if (boton_index == jugador.camiseta){
         if (convocados_guardados == null) {
            convocados_guardados = [jugador];
         } else {
           convocados_guardados.push(jugador);
          }
        
         localStorage.setItem('convocatoria',JSON.stringify(convocados_guardados));
         addModalConvocatoria(jugador);
         $(`#modal_${jugador.camiseta}`).modal('toggle');
         var boton_previo = $(`#pre_boton_convocar_${jugador.camiseta}`);
         boton_previo.attr('disabled',true);
         boton_previo.addClass("fa fa-check bg-success").html("");
      }   
    });
    break;

  default:
    if (convocados_guardados.length == 23){
      $("#lista_llena").show('fast');
      $("#lista_llena .close").click(function(){
                    $("#lista_llena").hide();
      })
      $("#lista_llena a").click(function(){
        $("#lista_llena").hide();
      })
      var boton_index = $(event.target).data("camiseta");
      $(`#modal_${boton_index}`).modal('toggle');
     
    } else{
      jugadores.forEach(function(jugador){
        var boton_index = $(event.target).data("camiseta");
        if (boton_index == jugador.camiseta){
           if (convocados_guardados == null) {
              convocados_guardados = [jugador];
           } else {
             convocados_guardados.push(jugador);
            }
          
           localStorage.setItem('convocatoria',JSON.stringify(convocados_guardados));
           addModalConvocatoria(jugador);
           $(`#modal_${jugador.camiseta}`).modal('toggle');
           var boton_previo = $(`#pre_boton_convocar_${jugador.camiseta}`);
           boton_previo.attr('disabled',true);
           boton_previo.addClass("fa fa-check bg-success text-white").html("");
        }   
      });
    } 
  break;     
}

  
})

   















function Llenar_lista(){  
convocados_guardados.forEach(function(jugador){
    addModalConvocatoria(jugador);
})
}




function addModalConvocatoria(jugador){
  var lista_de_convocados = $("#lista_de_convocados_tbody");
  var boton_previo = $(`#pre_boton_convocar_${jugador.camiseta}`);
  boton_previo.attr('disabled',true);
  boton_previo.addClass("fa fa-check bg-success text-white").html("");
  lista_de_convocados.append(
  `<tr id="${jugador.nombre}">
  <td scope="col">${jugador.camiseta}</td>
  <td scope="col">${jugador.nombre}</td>
  <td scope="col">${jugador.posicion}</td>
  <td scope="col"><button type="button" class="close" onclick="Delete(${jugador.camiseta})">&times;</button></td>
  </tr>`);
  
  switch(jugador.posicion){
    case "Arquero":
     arqueros_convocados.push(jugador);
     break;
    case "Defensor":
     defensores_convocados.push(jugador);
     break;
    case "Volante":
      volantes_convocados.push(jugador);
      break;
    case "Delantero":
      delanteros_convocados.push(jugador);
      break      
  };
  Show_convocados_number();
}

// Borrar jugadores de la lista

$("#limpiar_lista_btn").click(function(event){
    Limpiar_lista();
})


function Delete(boton){
  if (convocados_guardados.length == 1){
       Limpiar_lista()
  } 
  else {
    var boton_index = boton;
    $(`#pre_boton_convocar_${boton}`).attr("disabled",false).removeClass("fa fa-check bg-success text-white").html("Convocar");
    convocados_guardados.forEach(function(jugador){  
        if (jugador.camiseta == boton_index ){
         var jugador_index= convocados_guardados.indexOf(jugador); 
         convocados_guardados.splice(jugador_index,1);
         arqueros_convocados=[];
         defensores_convocados=[];
         volantes_convocados=[];
         delanteros_convocados=[];
         $("#lista_de_convocados_tbody").html('');
         localStorage.setItem('convocatoria',JSON.stringify(convocados_guardados));
         Llenar_lista();
        }
    })
  }   
}

function Limpiar_lista(){ 
localStorage.removeItem('convocatoria');
convocados_guardados=[];
arqueros_convocados=[];
defensores_convocados=[];
volantes_convocados=[];
delanteros_convocados=[];
var lista_de_convocados = $("#lista_de_convocados_tbody");
lista_de_convocados.html("");
Show_convocados_number();
$(".boton_convocar").attr("disabled",false);
$(".pre_boton_convocar").attr("disabled",false);
$(".pre_boton_convocar").removeClass("fa fa-check bg-success text-white").html("Convocar");

}

function Show_convocados_number(){
  var convocados_nro=$("#nro_de_convocados");
  convocados_nro.html(`<div class="circle yellow"></div> <b>Jugadores convocados: ${arqueros_convocados.length + defensores_convocados.length + volantes_convocados.length+delanteros_convocados.length}</b>`);
  var arqueros_nro = $("#nro_de_arqueros_convocados");
  arqueros_nro.html(`<div class="circle yellow"></div> Arqueros: ${arqueros_convocados.length}`);
  var defensores_nro = $("#nro_de_defensores_convocados");
  defensores_nro.html(`<div class="circle green"></div> Defensores: ${defensores_convocados.length}`);
  var volantes_nro = $("#nro_de_volantes_convocados");
  volantes_nro.html(`<div class="circle blue"></div> Volantes: ${volantes_convocados.length}`);
  var delanteros_nro = $("#nro_de_delanteros_convocados");
  delanteros_nro.html(`<div class="circle red"></div>Delanteros: ${delanteros_convocados.length}`)
  ;
}