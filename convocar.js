// BUGS PENDIENTES
/*
1) El btn de "Limpiar lista" no habilita nuevamente los btn "Convocar" hasta recargar la página
2) Los btn "x" para eliminar jugadores de la lista no funcionan aún
3) Agregar modal/alert personalizado de confirmación 
4) Limitar máximo de convocados a 23

*/
var convocatoria = [];
var convocados_guardados = [];
var arqueros_convocados=[];
var defensores_convocados=[];
var volantes_convocados=[];
var delanteros_convocados=[];

window.onload=function getStorage(){
   convocados_guardados = JSON.parse(localStorage.getItem('convocatoria'));
   if (convocados_guardados !== null){
      Llenar_lista();
   }
}





// Función Convocar
var botones_convocar = $(".boton_convocar");
botones_convocar.click(function(event){
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
         $(event.target).attr('disabled',true)
      }

       
  })  
  

})

   















function Llenar_lista(){
convocados_guardados.forEach(function(jugador){
    addModal(jugador);
})
}




function addModal(jugador){
  let boton_convocar = document.getElementById(`boton ${jugador.camiseta}`);
  boton_convocar.disabled = true;
  var lista_de_convocados = document.getElementById("lista_de_convocados_tbody");
  lista_de_convocados.innerHTML +=
  `<tr>
  <td scope="col">${jugador.camiseta}</td>
  <td scope="col">${jugador.nombre}</td>
  <td scope="col">${jugador.posicion}</td>
  <td scope="col"><button type="button" class="close delete-jugador" data-close=${jugador.camiseta}">&times;</button></td>
  </tr>`;

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


function Limpiar_lista(event){
   localStorage.removeItem('convocatoria');
   convocados_guardados=[];
   arqueros_convocados=[];
   defensores_convocados=[];
   volantes_convocados=[];
   delanteros_convocados=[];
   var lista_de_convocados = document.getElementById("lista_de_convocados_tbody");
   lista_de_convocados.innerHTML =``;
   Show_convocados_number();
   $('btn btn-primary boton_convocar').attr('disabled',false);

}


function Show_convocados_number(){
  var convocados_nro=document.getElementById("nro_de_convocados");
  convocados_nro.innerHTML=`<div class="circle yellow"></div> <b>Jugadores convocados: ${arqueros_convocados.length + defensores_convocados.length + volantes_convocados.length+delanteros_convocados.length}</b>`
  var arqueros_nro = document.getElementById("nro_de_arqueros_convocados");
  arqueros_nro.innerHTML=`<div class="circle yellow"></div> Arqueros convocados: ${arqueros_convocados.length}`;
  var defensores_nro = document.getElementById("nro_de_defensores_convocados");
  defensores_nro.innerHTML=`<div class="circle green"></div> Defensores convocados: ${defensores_convocados.length}`;
  var volantes_nro = document.getElementById("nro_de_volantes_convocados");
  volantes_nro.innerHTML=`<div class="circle blue"></div> Volantes convocados: ${volantes_convocados.length}`;
  var delanteros_nro = document.getElementById("nro_de_delanteros_convocados");
  delanteros_nro.innerHTML=`<div class="circle red"></div>Delanteros convocados: ${delanteros_convocados.length}`;
}