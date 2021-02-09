let boton1 = document.querySelector("#bot1")
let boton2 = document.querySelector("#bot2")
let boton3 = document.querySelector("#bot3")

let parrafo1 = document.querySelector("#p1")
let parrafo2 = document.querySelector("#p2")
let parrafo3 = document.querySelector("#p3")

boton1.onclick = cambiarColor;
boton2.onclick = ocultarReaparecer;
boton3.onclick = aparecer1;

function cambiarColor() {
    parrafo1.style.color = "rgb(31, 63, 231)"
}

function ocultarReaparecer() {
    if(parrafo2.style.display == "block") {
        parrafo2.style.display = "none"
    } else {
        parrafo2.style.display = "block"
    }
}

function aparecer1() {
    parrafo3.style.display = "none"
    setTimeout (aparecer2, 3000);
}

function aparecer2() {
    parrafo3.style.display = "block"
}
