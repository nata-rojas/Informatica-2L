let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")


function dibujarPeon(x, y, r, colorRelleno){

    ctx.fillStyle = colorRelleno
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill()

    ctx.fillStyle = colorRelleno
    ctx.beginPath()
    ctx.arc(x, y - 13, r - 5, 0, 2*Math.PI);
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x - r, y + r*2.5)
    ctx.lineTo(x+r, y+r*2.5)
    ctx.lineTo(x,y)
    ctx.fill()

    ctx.beginPath()
    ctx.rect(x - 1.1*r, y + r*2.5, r*2.2, r/3)
    ctx.fill()
}



let x = 0;
let y = 0;
let vX = 600;
let vY = 0;
let dT = 30;

function movimientoVertical(){
    let dX = (dT/1000) * 200;
    y = y + dX;
    dibujarPeon(200, y, 12.5, "#FF5733");
}

function movimientoHorizontal(){
    let dX = (dT/1000) * 40;
    x = x + dX;
    dibujarPeon(x, 200, 12.5, "#900C3F");
}

function movimientoDiagonal(){
    let dX = (dT/1000) * 100;
    vX = vX - dX;
    vY = vY + dX;
    dibujarPeon(vX, vY, 12.5, "#581845");
}

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 600);
    movimientoVertical()
    movimientoHorizontal()
    movimientoDiagonal()
}


window.setInterval(moverYDibujar, dT);