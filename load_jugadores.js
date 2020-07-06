jugadores=[];
arqueros=[];
defensores=[];
volantes=[];
delanteros=[];



var localUrl = "http://192.168.0.14:8080/Desktop/Estudio/Curso%20de%20Javascript/data/data.json"


$.ajax ({
    method: "GET",
    url: localUrl

}) .done (function (data){
    Load_data(data)
}) .fail (function (data){
   console.log("Error")
})


function Load_data(elements){
  elements.forEach(function(element){
      jugadores.push(element)
  })
  Dividir_por_posicion(jugadores);
  Aparecer();
}

function Aparecer(){
var block_arqueros = $("#arqueros");
arqueros.forEach(function(arquero){
    block_arqueros.append( 
    `<div id="${arquero.camiseta}" class="card arquero col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${arquero.foto.img}" alt="${arquero.foto.alt}">
        <h5 class="search_value">${arquero.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li class="search_value">Posición: Arquero</li>
         <li>Camiseta: ${arquero.camiseta} </li>
         <li>Club: ${arquero.club} </li>
      </ul>
      <div class="text-center">
      <a class="text-white" data-toggle="modal" data-target="#modal_${arquero.camiseta}"><button id="pre_boton_convocar_${arquero.camiseta}" class="btn btn-outline-primary pre_boton_convocar">Convocar</button></a>
     </div> 
     </div>
   </div>
   <div class="modal" id="modal_${arquero.camiseta}" data-backdrop="static" >
   <div class="modal-dialog">
       <div class="modal-content">
 
              <!-- Modal Header -->
                <div class="modal-header bg-primary">
                    <h4 class="modal-title text-white">Convocar jugador</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
               </div>
               <!-- Modal body -->
               <div class="modal-body">
                      <p class="text-dark">¿Convocar a ${arquero.nombre}? </p>
                      <img  src="${arquero.foto.img}" alt="${arquero.foto.alt} float="right">
               </div>
 
               <!-- Modal footer -->
              <div class="modal-footer d-flex justify-content-center">
                 <button id="boton_${arquero.camiseta}" class="btn btn-success boton_convocar" data-camiseta="${arquero.camiseta}">Aceptar</button>
                 <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
              </div>
 
        </div>
   </div>
 </div>`);
});

var block_defensores = $("#defensores");
defensores.forEach(function(defensor){
    block_defensores.append(
    `<div id="${defensor.camiseta}" class="card defensor col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${defensor.foto.img}" alt="${defensor.foto.alt}">
        <h5 class="search_value">${defensor.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li class="search_value">Posición: Defensor</li>
         <li>Camiseta: ${defensor.camiseta} </li>
         <li>Club: ${defensor.club} </li>
      </ul>
     <div class="text-center">
     <a class="text-white" data-toggle="modal" data-target="#modal_${defensor.camiseta}"><button id="pre_boton_convocar_${defensor.camiseta}" class="btn btn-outline-primary pre_boton_convocar">Convocar</button></a>
    </div> 
    </div>
  </div>
  <div class="modal" id="modal_${defensor.camiseta}" data-backdrop="static" >
  <div class="modal-dialog">
      <div class="modal-content">

             <!-- Modal Header -->
               <div class="modal-header bg-primary">
                   <h4 class="modal-title text-white">Convocar jugador</h4>
                   <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <!-- Modal body -->
              <div class="modal-body">
                     <p class="text-dark">¿Convocar a ${defensor.nombre}? </p>
                     <img  src="${defensor.foto.img}" alt="${defensor.foto.alt} float="right">
              </div>

              <!-- Modal footer -->
             <div class="modal-footer d-flex justify-content-center">
                <button id="boton_${defensor.camiseta}" class="btn btn-success boton_convocar" data-camiseta="${defensor.camiseta}">Aceptar</button>
                <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
             </div>

       </div>
  </div>
</div>`)
});

var block_volantes = $("#volantes");
volantes.forEach(function(volante){
    block_volantes.append( 
    `<div id="${volante.camiseta}" class="card volante col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${volante.foto.img}" alt="${volante.foto.alt}">
        <h5 class="search_value">${volante.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li class="search_value">Posición: Volante</li>
         <li>Camiseta: ${volante.camiseta} </li>
         <li>Club: ${volante.club} </li>
      </ul>
      <div class="text-center">
      <a class="text-white" data-toggle="modal" data-target="#modal_${volante.camiseta}"><button id="pre_boton_convocar_${volante.camiseta}" class="btn btn-outline-primary pre_boton_convocar">Convocar</button></a>
     </div> 
     </div>
   </div>
   <div class="modal" id="modal_${volante.camiseta}" data-backdrop="static" >
   <div class="modal-dialog">
       <div class="modal-content">
 
              <!-- Modal Header -->
                <div class="modal-header bg-primary">
                    <h4 class="modal-title text-white">Convocar jugador</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
               </div>
               <!-- Modal body -->
               <div class="modal-body">
                      <p class="text-dark">¿Convocar a ${volante.nombre}? </p>
                      <img  src="${volante.foto.img}" alt="${volante.foto.alt} float="right">
               </div>
 
               <!-- Modal footer -->
              <div class="modal-footer d-flex justify-content-center">
                 <button id="boton_${volante.camiseta}" class="btn btn-success boton_convocar" data-camiseta="${volante.camiseta}">Aceptar</button>
                 <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
              </div>
 
        </div>
   </div>
 </div>`)
});

var block_delanteros = $("#delanteros");
delanteros.forEach(function(delantero){
    block_delanteros.append(  
    `<div id="${delantero.camiseta}" class="card delantero col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${delantero.foto.img}" alt="${delantero.foto.alt}">
        <h5 class="search_value">${delantero.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li class="search_value">Posición: Delantero</li>
         <li>Camiseta: ${delantero.camiseta} </li>
         <li>Club: ${delantero.club} </li>
      </ul>
      <div class="text-center">
      <a class="text-white" data-toggle="modal" data-target="#modal_${delantero.camiseta}"><button id="pre_boton_convocar_${delantero.camiseta}" class="btn btn-outline-primary pre_boton_convocar">Convocar</button></a>
     </div> 
     </div>
   </div>
   <div class="modal" id="modal_${delantero.camiseta}" data-backdrop="static" >
   <div class="modal-dialog">
       <div class="modal-content">
 
              <!-- Modal Header -->
                <div class="modal-header bg-primary">
                    <h4 class="modal-title text-white">Convocar jugador</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
               </div>
               <!-- Modal body -->
               <div class="modal-body">
                      <p class="text-dark">¿Convocar a ${delantero.nombre}? </p>
                      <img  src="${delantero.foto.img}" alt="${delantero.foto.alt} float="right">
               </div>
 
               <!-- Modal footer -->
              <div class="modal-footer d-flex justify-content-center">
                 <button id="boton_${delantero.camiseta}" class="btn btn-success boton_convocar" data-camiseta="${delantero.camiseta}">Aceptar</button>
                 <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
              </div>
 
        </div>
   </div>
 </div>`)
});

}









function Dividir_por_posicion(lista){ 
    lista.forEach(function(jugador){
      switch(jugador.posicion){
        case "Arquero":
          arqueros.push(jugador);
          break;
        case "Defensor":
          defensores.push(jugador);
          break; 
        case "Volante":
           volantes.push(jugador);
           break;
        case "Delantero":
            delanteros.push(jugador);
             break; 
      }
    
    })
}