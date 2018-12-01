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
    ctx.fillStyle="black";
    ctx.fillRect(4*unit,0,4*unit,unit);
    ctx.fillRect(2*unit,unit,2*unit,unit);
    ctx.fillRect(8*unit,unit,2*unit,unit);
    ctx.fillRect(1*unit,2*unit,unit,2*unit);
    ctx.fillRect(0,4*unit,unit,7*unit);
    ctx.fillRect(11*unit,4*unit,1*unit,7*unit);
    ctx.fillRect(10*unit,2*unit,1*unit,2*unit);   
    ctx.fillRect(1*unit,11*unit,2*unit,unit);
    ctx.fillRect(10*unit,11*unit,2*unit,1*unit);
    ctx.fillRect(4*unit,0,4*unit,unit);
    ctx.fillRect(2*unit,unit,2*unit,unit);
    ctx.fillRect(2*unit,unit,2*unit,unit);
    ctx.fillRect(7*unit,0,4*unit,unit);
    ctx.fillRect(7*unit,2*unit,2*unit,unit);
    ctx.fillRect(2*unit,unit,2*unit,1*unit);

    ctx.fillStyle="yellow";
    ctx.fillRect(5*unit,0,6*unit,unit);
    ctx.fillRect(unit,unit,2*unit,unit);
    ctx.fillRect(5*unit,5*unit,2*unit,unit);
    ctx.fillRect(1*unit,5**unit,unit,2*unit);
    ctx.fillRect(1*unit,2*unit,unit,2*unit);
    ctx.fillRect(0,4*unit,unit,7*unit);
    ctx.fillRect(10*unit,3*unit,1*unit,6*unit);
    ctx.fillRect(9*unit,1*unit,1*unit,1*unit);

    ctx.fillStyle="white";
    ctx.fillRect(10*unit,4*unit,1*unit,7*unit);
    ctx.fillRect(10*unit,2*unit,1*unit,2*unit);
    ctx.fillRect(unit,11*unit,2*unit,unit);


    


    
    

    
    
    


}

