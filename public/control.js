'use strict';

(function() {

    var socket = io();
    var current = 1;
    var slidesLen = 0;

    socket.on('slidesLen', function(e){
        if(slidesLen == 0){
            slidesLen = e;
            console.log(slidesLen);
            
            for(var i=1; i<=slidesLen; i++){
                 $('#gotoSlide')
                    .append($('<option>', { value : i })
                    .text(i)); 
                console.log(i);
            }
        }     
    });
    
    $('#navUP').on('click', function(){
        current--;
        if(current<1){current=1;}
        socket.emit('key', current);
        $("#gotoSlide").val(current);
    });
    
    $('#navDOWN').on('click', function(){
        current++;
        if(current<1){current=1;}
        socket.emit('key', current);
        $("#gotoSlide").val(current);
    });
    
    $('#gotoSlide').on('change', function(){
        current = $(this).val();
        socket.emit('key', current);
    });

})();

