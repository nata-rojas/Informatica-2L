let a = 0
let b = 0
var notas = [ ]
let total = 0
let i = 0
let numeronotas = parseFloat(prompt("¿Cuántas notas va a ingresar?"))
while (a < numeronotas) {
    b = parseFloat(prompt("Ingrese una nota."))
    if (0 < b < 10 && Number.isInteger(b)) {
        notas.push (b)
        console.log (notas)
        a = a + 1
        total = total + notas [i]
        console.log (total)
        i = i + 1
    } 
    else {
        alert ("Para que la nota sea válida debe ser un numero entero entre 0 y 10.")
    }
}
alert (total/numeronotas)
