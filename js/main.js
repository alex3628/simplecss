(typeof(jQuery) != 'undefined') && jQuery(function ($){
    $('img.lazy').jail({
        timeout : 1000
    });
    $("#slides").slidesjs();
    $("#slides1").slidesjs({
        pagination: {
            active: false
        },
        navigation: {
            active: false
        }
    });
    $("#slides2").slidesjs({
        navigation: {
            effect: "fade"
        },
        pagination: {
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 800
            }
        }
    });
    if (navigator.userAgent.indexOf('iPhone') != -1 && (window.navigator.userAgent.indexOf("Safari" )>= 0)) {
        //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    $("#nav .nav-item").each(function(){
        if( window.location.href.indexOf( $(this).attr("title").toLowerCase() ) >= 0 ){
            $(this).addClass("active");
            return false;
        }
    });
    $("#nav-control").click(function(){
        $(this).toggleClass("fullscreen fa-chevron-right");
        $(".main").toggleClass("fullscreen");
    });
});