let visitas = localStorage.getItem("visitas")
console.log(visitas)
let contar = 0
let contado = localStorage.getItem("contado")
console.log(contado)

if (contado == null) {
    localStorage.setItem("contado", 1)
} else {
    contar = parseFloat(contado) + 1
    console.log(contar)
    localStorage.setItem("contado", contar)
    alert("Ha visitado esta página " + contar + " veces")
}
