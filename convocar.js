// BUGS PENDIENTES
/*
1) Los btn "x" para eliminar jugadores de la lista no funcionan aún
2) Agregar modal/alert personalizado de confirmación 
 

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
         addModal(jugador);
         $(`#modal_${jugador.camiseta}`).modal('toggle');
         var boton_previo = $(`#pre_boton_convocar_${jugador.camiseta}`);
         boton_previo.attr('disabled',true);
      }   
    });
    break;

  default:
    if (convocados_guardados.length == 23){
      var boton_index = $(event.target).data("camiseta");
      $(`#modal_${boton_index}`).modal('toggle');
      $("#lista_llena").show('fast');
      $("#lista_llena .close").click(function(){
                    $("#lista_llena").hide();
      })
      $("#lista_llena a").click(function(){
        $("#lista_llena").hide();
      })
     
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
           addModal(jugador);
           $(`#modal_${jugador.camiseta}`).modal('toggle');
           var boton_previo = $(`#pre_boton_convocar_${jugador.camiseta}`);
           boton_previo.attr('disabled',true);
        }   
      });
    } 
  break;     
}

  
})

   















function Llenar_lista(){  
convocados_guardados.forEach(function(jugador){
    addModal(jugador);
})
}




function addModal(jugador){
  var lista_de_convocados = $("#lista_de_convocados_tbody");
  let boton_convocar =$(`#boton_${jugador.camiseta}`);
  boton_convocar.attr('disabled',true);
  var boton_previo = $(`#pre_boton_convocar_${jugador.camiseta}`);
  boton_previo.attr('disabled',true);
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
function Limpiar_lista(event){
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

}

/*
function Delete(boton){
      var boton_index = boton;
      convocados_guardados.forEach(function(jugador){  
      if (jugador.camiseta == boton_index ){
      var jugador_index= convocados_guardados.indexOf(jugador); 
      convocados_guardados =convocados_guardados.splice(jugador_index,1);
      localStorage.setItem('convocatoria',convocados_guardados);
      switch(jugador.posicion){
        case "Arquero":
         let jugador_index_arq = arqueros_convocados.indexOf(jugador); 
         arqueros_convocados=arqueros_convocados.splice(jugador_index_arq,1);
         break;
        case "Defensor":
          let jugador_index_def = defensores_convocados.indexOf(jugador); 
          defensores_convocados=defensores_convocados.splice(jugador_index_def,1);
         break;
        case "Volante":
          let jugador_index_vol = volantes_convocados.indexOf(jugador); 
          volantes_convocados=volantes_convocados.splice(jugador_index_vol,1);
          break;
        case "Delantero":
          let jugador_index_del = delanteros_convocados.indexOf(jugador); 
          delanteros_convocados = delanteros_convocados.splice(jugador_index_del,1);
          break;      
      };
      $("#lista_de_convocados_tbody").html('');
      Llenar_lista();
   }
  })   
  

}
*/



function Show_convocados_number(){
  var convocados_nro=$("#nro_de_convocados");
  convocados_nro.html(`<div class="circle yellow"></div> <b>Jugadores convocados: ${arqueros_convocados.length + defensores_convocados.length + volantes_convocados.length+delanteros_convocados.length}</b>`);
  var arqueros_nro = $("#nro_de_arqueros_convocados");
  arqueros_nro.html(`<div class="circle yellow"></div> Arqueros convocados: ${arqueros_convocados.length}`);
  var defensores_nro = $("#nro_de_defensores_convocados");
  defensores_nro.html(`<div class="circle green"></div> Defensores convocados: ${defensores_convocados.length}`);
  var volantes_nro = $("#nro_de_volantes_convocados");
  volantes_nro.html(`<div class="circle blue"></div> Volantes convocados: ${volantes_convocados.length}`);
  var delanteros_nro = $("#nro_de_delanteros_convocados");
  delanteros_nro.html(`<div class="circle red"></div>Delanteros convocados: ${delanteros_convocados.length}`)
  ;
}