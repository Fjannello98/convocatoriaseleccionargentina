
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



function Llenar_lista(){  
  convocados_guardados.forEach(function(jugador){
      addModalConvocatoria(jugador);
  })
}



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

  
});



// Agregar futbolistas al modal de convocados
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







/* Borrar jugadores de la lista */


// Borrar todos (Limpiar lista)
$("#limpiar_lista_btn").click(function(event){
    Limpiar_lista();
})

// Borrar uno
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






// Mostrar cantidad de convocados en la lista
function Show_convocados_number(){
  var convocados_nro=$("#nro_de_convocados");
  convocados_nro.html(`<div class="circle yellow"></div> <b>Jugadores convocados: ${arqueros_convocados.length + defensores_convocados.length + volantes_convocados.length+delanteros_convocados.length}</b>`);
  var arqueros_nro = $(".nro_de_arqueros_convocados");
  arqueros_nro.html(`<div class="circle yellow"></div> Arqueros: ${arqueros_convocados.length}`);
  var defensores_nro = $(".nro_de_defensores_convocados");
  defensores_nro.html(`<div class="circle green"></div> Defensores: ${defensores_convocados.length}`);
  var volantes_nro = $(".nro_de_volantes_convocados");
  volantes_nro.html(`<div class="circle blue"></div> Volantes: ${volantes_convocados.length}`);
  var delanteros_nro = $(".nro_de_delanteros_convocados");
  delanteros_nro.html(`<div class="circle red"></div>Delanteros: ${delanteros_convocados.length}`)
  ;
}






// Continuar pasos en Modal de convocatoria
$("#step-2").hide();
$("#step-3").hide();
var boton_continuar = $("#btn_continue");
boton_continuar.click(function(event){
  if (convocados_guardados !== null){
      if (convocados_guardados.length == 23) {
               if (arqueros_convocados.length >= 3){
                        Go_step2();
                        $("#btn_goback").click(function(event){
                                Goback_step1();
                        })
               } else {
                    $("#error_arqueros").show('fast');
               }
      } else if (convocados_guardados.length >= 15){
              if (arqueros_convocados.length >= 3){
                       Go_step2();
                       $("#btn_goback").click(function(event){
                               Goback_step1();
                       })
               } else {
                     $("#error_arqueros").show('fast');
               }
      }  else {
        $("#lista_insuficiente").show('fast');
      }       
} else {
   $("#jugadores_nohay").show('fast');
}          
})




function Go_step2(){
  $("#step-1").slideUp();
  $("#step-2").slideDown();
  $("#card-step-1").removeClass("bg-info text-light");
  $("#card-step-2").addClass("bg-info text-light");  
  $("#modal_footer_step1").removeClass().addClass("d-none");
  $("#btn_goback").click(function(event){
    Goback_step1();
  })
  $("#btn_confirm").click(function(event){
        $('form[name="envio"]').validate({
                   rules: {
                          email:{ 
                               required:true, 
                                email:true
                           },
                          name:{ 
                               required:true
                           },
                    },
                   messages: {
                          email:{ 
                               required:"Campo Obligatorio",
                               email:"Ingrese un email válido", 
                          },
                           name:{ 
                              required:"Campo obligatorio"
                           }
                   },
              submitHandler: function(form){
                       Go_step3();
              }
         });
  });
}

function Goback_step1(){
  $("#step-1").slideDown();
  $("#step-2").slideUp();
  $("#card-step-2").removeClass("bg-info text-light");
  $("#card-step-1").addClass("bg-info text-light"); 
  $("#modal_footer_step1").removeClass("d-none").addClass("modal-footer d-flex justify-content-between");
}

function Go_step3(){
  $("#step-1").slideUp();
  $("#step-2").slideUp();
  $("#step-3").slideDown();
  $("#card-step-2").removeClass("bg-info text-light");
  $("#card-step-3").addClass("bg-info text-light");  
  var name = $('input[name="name"]').val();
  $("#lista_enviada_a").append(`Lista enviada a ${name}`);
  Limpiar_lista();
  $(window).click(function(){
     Goback_step1();
     $("#step-3").slideUp();
     $("#card-step-3").removeClass("bg-info text-light");
  })
}






// Modal Error Close
$(".modal_error .close").click(function(){
  $(".modal_error").hide();
})
$(".modal_error a").click(function(){
$(".modal_error").hide();
})




// Slide Toggle en lista de convocados
$("#lista_de_convocados_tbody").slideUp();
var clicks = 0;
$("#list_toggle").click(function(){
  clicks ++  
  $("#list_toggle").animate(    
    { deg: 90 },
    {duration: 200,
       step: function(now) {
         $(this).css({ transform: 'rotate(' + now + 'deg)' });
       }
    }
  );
  if (clicks%2 == 0){
    $("#list_toggle").animate(    
      { deg: 0 },
      {duration: 200,
         step: function(now) {
           $(this).css({ transform: 'rotate(' + now + 'deg)' });
         }
      }
    );
  }
  $("#lista_de_convocados_tbody").slideToggle(200);
});
