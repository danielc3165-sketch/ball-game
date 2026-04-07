'use strict';

var height=100;

function showMessage(el) {
    height+=50;
    if(height>400) height=100
   
el.style.height=height+'px';
    el.innerText=height+'px';
    
    //console.log(el.style.height);
}