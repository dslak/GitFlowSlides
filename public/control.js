'use strict';

(function() {

    var socket = io();
    var current = 1;

    $('#navUP').on('click', function(){
        current--;
        if(current<1){current=1;}
        socket.emit('key', current);
    });
    
    $('#navDOWN').on('click', function(){
        current++;
        if(current<1){current=1;}
        socket.emit('key', current);
    });
    
    $('#gotoSlide').on('change', function(){
        current = $(this).val();
        socket.emit('key', current);
    });

})();

