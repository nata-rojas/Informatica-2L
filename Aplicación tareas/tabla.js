let tareas = [ 
    {materia:"", descripción:"", fecha:""}
]

let tabla = document.querySelector('#tareas')
function llenarTabla() { 
    let contenidoTabla ='<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas) {
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.materia}</td><td>${tarea.descripción}</td><td>${tarea.fecha}</td></tr>`
    }
    tabla.innerHTML = contenidoTabla;
}

let form = document.querySelector('#formulario')
function añadirTarea() { 
    let materiaNueva = document.querySelector("input[name=Materia]").value
    let descripciónNueva = document.querySelector("input[name=Descripción]").value
    let fechaNueva = document.querySelector("input[name=Fecha]").value 
    
    let tareaNueva = {materia:materiaNueva, descripción:descripciónNueva, fecha:fechaNueva}
    console.log("Ahora voy a añadir la siguiente tarea");
    console.log(tareaNueva)
    
    tareas.push(tareaNueva)
    llenarTabla()
    return false
} 

form.onsubmit = añadirTarea