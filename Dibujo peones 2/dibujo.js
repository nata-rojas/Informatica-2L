let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")


function dibujarPeon(xC, yC, r, colorRelleno){

    ctx.fillStyle = colorRelleno
    ctx.beginPath()
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.fill()

    ctx.fillStyle = colorRelleno
    ctx.beginPath()
    ctx.arc(xC, yC - 13, r - 5, 0, 2*Math.PI);
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(xC,yC)
    ctx.lineTo(xC - r, yC + r*2.5)
    ctx.lineTo(xC+r, yC+r*2.5)
    ctx.lineTo(xC,yC)
    ctx.fill()

    ctx.beginPath()
    ctx.rect(xC - 1.1*r, yC + r*2.5, r*2.2, r/3)
    ctx.fill()
}


for(let x = 500; x < 540; x= x+40){
    dibujarPeon(x, 70, 9, "#96CADA")
}

for(let x = 400; x < 500; x= x+535){
    dibujarPeon(x, 150, 13, "#DAA696")
}

for(let x = 280; x < 460; x= x+250){
    dibujarPeon(x, 300, 10.8, "#DAD296")
}

for(let x = 140; x < 160; x= x+50){
    dibujarPeon(x, 410, 17, "#96DAC1")
}