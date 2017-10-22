'use strict';

(function() {

    var socket = io();
    var current = 0;

    $('#navUP').on('click', function(){
        current--;
        if(current<=0){current=1;}
        socket.emit('key', current);
    });
    
    $('#navDOWN').on('click', function(){
        current++;
        if(current<=0){current=1;}
        socket.emit('key', current);

    });

})();
/*


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
            scrollTo(current,e);
        }
        
    }*/
