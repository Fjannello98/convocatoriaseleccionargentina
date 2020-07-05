var filtro_buttons = $(".filtro_button");

filtro_buttons.click(function(event){
    var indexbutton= $(event.target).data("filtro");
    filtro_buttons.removeClass().addClass("filtro_button btn btn-outline-light")
    $(event.target).addClass("bg-light text-primary");
    switch(indexbutton){
        case "todos":
            $("#arqueros").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');
            $("#defensores").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');
            $("#volantes").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');
            $("#delanteros").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');
            break;
        case "arqueros":
            $("#arqueros").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');
            $("#defensores").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            $("#volantes").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            $("#delanteros").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            break;
        case "defensores":  
             $("#arqueros").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
             $("#defensores").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');
             $("#volantes").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
             $("#delanteros").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            break;
        case "volantes":
            $("#arqueros").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            $("#defensores").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            $("#volantes").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');
            $("#delanteros").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');   
            break;
        case "delanteros": 
            $("#arqueros").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            $("#defensores").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
             $("#volantes").removeClass().addClass('d-none flex-row flex-wrap justify-content-center text-center p-3');
            $("#delanteros").removeClass().addClass('d-flex flex-row flex-wrap justify-content-center text-center p-3');   
            break;       
    }

})

