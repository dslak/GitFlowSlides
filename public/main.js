'use strict';

(function() {

    var socket = io();
    var current = 1;
    var slidesLen = $('section').length;

    //window.addEventListener('keypress', onKeyPress, false);

    socket.on('key', navigate);
       /* 
    function onKeyPress(e){
        e.preventDefault();
        console.log("Press: ", e.key);
        socket.emit('key', e.key);
    }    
    */
    function navigate(e){
        console.log(e);
        switch(e){
            case "ArrowDown":
                current++;
            break;
            case "ArrowUp":
                current--;
            break;
        }  
        
        if(current<=0){current=1;}
        if(current>slidesLen){
            current=slidesLen;
        }else{
            console.log('LEN: ',slidesLen, current);
            scrollTo(current);
        }
        
    }

    
    function scrollTo(slide){
        console.log("Slide: ", slide, $('section:nth-child('+slide+')').offset().top);
        $('section:nth-child('+slide+') img.git').css({'top': '80%','opacity':'0'});
        $("html, body").stop().animate({ scrollTop: $('section:nth-child('+slide+')').offset().top }, 500,
            function(){
                $('section:nth-child('+slide+') img.git').animate({'top': '50%','opacity':'1'},1000,'easeOutExpo',function(){});
            }
        );
    }
  
})();
