var canvas;
var ctx;

var unit = 10;
window.onload = init;

function init( ){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // Filling a rectanglr
    // Change colour of fill 
    ctx.fillStyle="black";
    // drawRuler(10);
    ctx.fillRect(10*unit,10*unit,10*unit,10*unit);
    
    drawRuler(10);
}