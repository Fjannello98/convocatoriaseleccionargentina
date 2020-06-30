arqueros=[];
defensores=[];
volantes=[];
delanteros=[];

Dividir_por_posicion(jugadores);

var block_arqueros = $("#arqueros");
arqueros.forEach(function(arquero){
    block_arqueros.append( 
    `<div class="card arquero col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${arquero.foto.img}" alt="${arquero.foto.alt}">
        <h5>${arquero.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li>Posición: Arquero</li>
         <li>Camiseta: ${arquero.camiseta} </li>
         <li>Club: ${arquero.club} </li>
      </ul>
     <div class="text-center">
      <button id="boton ${arquero.camiseta}" class="btn btn-primary boton_convocar" data-camiseta="${arquero.camiseta}" >Convocar</button>
    </div> 
    </div>
  </div>`);
});

var block_defensores = $("#defensores");
defensores.forEach(function(defensor){
    block_defensores.append(
    `<div class="card defensor col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${defensor.foto.img}" alt="${defensor.foto.alt}">
        <h5>${defensor.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li>Posición: Defensor</li>
         <li>Camiseta: ${defensor.camiseta} </li>
         <li>Club: ${defensor.club} </li>
      </ul>
     <div class="text-center">
      <button id="boton ${defensor.camiseta}" class="btn btn-primary boton_convocar" data-camiseta="${defensor.camiseta}" >Convocar</button>
    </div> 
    </div>
  </div>`)
});

var block_volantes = $("#volantes");
volantes.forEach(function(volante){
    block_volantes.append( 
    `<div class="card volante col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${volante.foto.img}" alt="${volante.foto.alt}">
        <h5>${volante.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li>Posición: Volante</li>
         <li>Camiseta: ${volante.camiseta} </li>
         <li>Club: ${volante.club} </li>
      </ul>
     <div class="text-center">
      <button id="boton ${volante.camiseta}" class="btn btn-primary boton_convocar" data-camiseta="${volante.camiseta}" >Convocar</button>
    </div> 
    </div>
  </div>`)
});

var block_delanteros = $("#delanteros");
delanteros.forEach(function(delantero){
    block_delanteros.append(  
    `<div class="card delantero col-xs-9 col-sm-9 col-md-4 col-lg-2">
    <div class="card-body">
      <div class="card-title">
        <img class="card-img-top" src="${delantero.foto.img}" alt="${delantero.foto.alt}">
        <h5>${delantero.nombre}</h5>
      </div>  
      <ul class="list-unstyled">
         <li>Posición: Delantero</li>
         <li>Camiseta: ${delantero.camiseta} </li>
         <li>Club: ${delantero.club} </li>
      </ul>
     <div class="text-center">
      <button id="boton ${delantero.camiseta}" class="btn btn-primary boton_convocar" data-camiseta="${delantero.camiseta}" >Convocar</button>
    </div> 
    </div>
  </div>`)
});











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