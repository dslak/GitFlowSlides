'use strict';

(function() {

    var socket = io();

    $('#navUP').on('click', function(){
        socket.emit('key', 'ArrowUp');
    });
    
    $('#navDOWN').on('click', function(){
        socket.emit('key', 'ArrowDown');
    });

})();
