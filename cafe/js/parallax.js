$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)',
            })
            $('.acerca-de article').css({
                'transform': 'translate(0px,' + ( -scroll / 7) + '%)',
            })
        }
    });

    $(window).resize(function(){ // seguridad por si cambia el tamaño de pantalla a una mas pequeña
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('header .textos').css({
                'position': 'static',
                'margin': '100px 0',
                'transform': 'translate(0px,0px)',

                
            })
            $('.acerca-de article').css({
                'transform': 'translate(0px,0px)',
            })
        }
    })
})