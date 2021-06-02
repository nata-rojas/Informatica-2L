let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")


function dibujarCirculo (xc, yc, r, color){
    
    ctx.strokeStyle = color
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(xc, yc, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()
}


let x = 300
let y = 0
let r = 20
let color = "blue"
let vY = 10
let dT = 30

function moverCirculo(){
    ctx.clearRect(0,0,500,700)
    let dY = (dT/1000)*vY
    y = y + dY;
    dibujarCirculo(x, y, r, color)
}


function arrancarOParar(){
    if(vY>0){
        vY=0
    }
    else{
        vY = 10 
    }
}

window.setInterval(moverCirculo, dT);


window.onkeyup = function(event){
    console.log(event.code)
    
    if (event.code == "Space"){
        arrancarOParar();
    }

    if (event.code == "BracketRight"){
        r = r + 1;
    }

    if (event.code == "Slash"){
        r = r - 1;
    }
}


function cambiarColor(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}


window.onclick = function(event){
    let Xm = event.offsetX
    let Ym = event.offsetY

    distancia = Math.sqrt (Math.pow (Xm - x,2) + Math.pow (Ym - y,2))

    if(distancia <= r){
        cambiarColor()
    }
    else {vY = - vY}
}
