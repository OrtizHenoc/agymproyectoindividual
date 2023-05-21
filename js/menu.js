$(document).ready(main);

var contador = true;

function main(){
    $('.bt-menu').click(function(){
        toggleNav();
    });
    
    $(document).click(function(event){
        if(!$(event.target).closest('nav').length && !$(event.target).closest('.menu_bar').length) {
            closeNav();
        }
    });
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
