let Lista = [
    {nombre:"Pan"},
    {nombre:"Arroz"},
    {nombre:"Huevos"},
    {nombre:"Carne"},
    {nombre:"Pescado"}
]

let Lista = document.querySelector('#lista')

let contenidoLista = '<ul><li>Pan</li><li>Arroz</li><li>Huevos</li><li>Carne</li><li>Pescado</li></ul>'
for (lista of Lista){
    contenidoTabla = contenidoTabla + `<ul><li>${Lista.nombre}</li></ul>`
}

tabla.innerHTML = contenidoLista;