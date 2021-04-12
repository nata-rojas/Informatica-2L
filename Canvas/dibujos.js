let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")

//dibujo el lápiz

ctx.fillStyle = "orange"
ctx.strokeStyle = "black"
ctx.fillRect(100, 25 , 100, 50)
ctx.lineWidth= 1
ctx.strokeRect(100, 25, 100, 50)


ctx.fillStyle = "#EEDFCE"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(60,50);
ctx.lineTo(99,75);
ctx.lineTo(99,25);
ctx.closePath();
ctx.stroke()
ctx.fill()


ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(60,50);
ctx.lineTo(70,57);
ctx.lineTo(70,43);
ctx.stroke()
ctx.fill()


ctx.fillStyle = "#EF1273"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(200, 75)
ctx.lineTo(200, 75)
ctx.arc(200, 50, 25, -Math.PI/2, Math.PI/2)
ctx.stroke()
ctx.fill()



//dibujo el celular

ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.fillRect(300,15,90,167);
ctx.clearRect(315,33,60,83);


ctx.fillStyle = "#DCD5D8"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(333, 75)
ctx.arc(345,132,10,0, Math.PI*2)
ctx.fill()