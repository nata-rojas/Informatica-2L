let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")


function dibujarPeon(xC, yC, r, colorRelleno){

    ctx.strokeStyle = "black"
    ctx.fillStyle = colorRelleno
    ctx.beginPath()
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    ctx.strokeStyle = "black"
    ctx.fillStyle = colorRelleno
    ctx.beginPath()
    ctx.arc(xC, yC - 13, r - 5, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    ctx.strokeStyle = "black"
    ctx.fillStyle = colorRelleno
    ctx.beginPath()
    ctx.arc(xC, yC + 23, r + 5, 0, Math.PI*2);
    ctx.stroke()
    ctx.fill()
}


for(let x = 60; x < 400; x= x+40){
    dibujarPeon(x, 70, 10, "black")
}

for(let x = 60; x < 400; x= x+40){
    dibujarPeon(x, 140, 10, "white")
}