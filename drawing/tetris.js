var canvas;
var ctx;

var unit = 5;
window.onload = init;

function init( ){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // Filling a rectanglr
    // Change colour of fill 
    drawRuler()


    ctx.fillStyle="yellow";
    ctx.fillRect(4*unit,1*unit,4*unit,13*unit);
    ctx.fillRect(2*unit,2*unit,8*unit,11*unit);
    ctx.fillRect(1*unit,4*unit,10*unit,7*unit);