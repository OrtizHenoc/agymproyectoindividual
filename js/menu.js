$(document).ready(main);

var contador = true;
var desplegado = true;
function main(){
    $('.bt-menu').click(function(){
        toggleNav();
    });
    $(document).click(function(event){
        if(!$(event.target).closest('nav').length && !$(event.target).closest('.menu_bar').length) {
            closeNav();
        }
    });

    $('.cuenta-container').click(function(){
        toggleUser();
    });

    $(document).click(function(event){
        if(!$(event.target).closest('.cuenta-list').length && !$(event.target).closest('.cuenta-container').length) {
            cerrarDesplegable();
        }
    });

}
function toggleUser(){
    if(desplegado == true){
        $('.cuenta-list').animate({
            left:'0',
            top:'3%'
        });
        desplegado = false;
    } else {
        cerrarDesplegable();
    }
}

function cerrarDesplegable(){
    $('.cuenta-list').animate({
        left: '-100%',
        top:'3%'
    });
    desplegado = true;
}
function toggleNav() {
    if(contador == true){
        $('nav').animate({
            left:'0'
        });
        contador = false;
    } else {
        closeNav();
    }
}

function closeNav() {
    $('nav').animate({
        left: '-100%'
    });
    contador = true;
}
