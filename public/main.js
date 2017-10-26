'use strict';

(function() {

    var socket = io();
    var current = 1;
    var slidesLen = $('section').length;

    socket.on('key', navigate);
    socket.emit('slidesLen', slidesLen);

    function navigate(e){
        if(e>slidesLen){
            e=slidesLen;
        }
        scrollTo(e);
    }

    
    function scrollTo(slide){
        var top = $('section:nth-child('+slide+') img.git.animate').css('top');
        console.log("Slide: ", slide, $('section:nth-child('+slide+')').offset().top, top);
        
        $('section:nth-child('+slide+') img.git.animate').css({'top': '80%','opacity':'0'});
        $("html, body").stop().animate({ scrollTop: $('section:nth-child('+slide+')').offset().top }, 500,
            function(){
                $('section:nth-child('+slide+') img.git.animate').animate({'top': top,'opacity':'1'},1000,'easeOutExpo');
            }
        );
    }
  
})();
