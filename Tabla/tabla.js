let razasPerros = [ 
    {raza: "Golden Retriever", edadPromedio: "10 a 12 años", origen: "Reino Unido, Escocia, Inglaterra", imagen: "https://t1.ea.ltmcdn.com/es/razas/5/5/0/img_55_golden-retriever-o-cobrador-dorado_0_orig.jpg"},
    {raza: "Husky Siberiano", edadPromedio: "12 a 15 años", origen: "Siberia", imagen: "https://t2.ea.ltmcdn.com/es/razas/8/0/1/img_108_husky-siberiano_0_orig.jpg"},
    {raza: "Border Collie", edadPromedio: "10 a 17 años", origen: "Reino Unido, Gales, Escocia, Irlanda, Inglaterra", imagen: "https://t2.ea.ltmcdn.com/es/razas/3/6/0/img_63_border-collie_0_orig.jpg"},
    {raza: "Yorkshire Terrier", edadPromedio: "13 a 16 años", origen: "Inglaterra", imagen: "https://t2.uc.ltmcdn.com/images/5/6/2/img_como_pararle_las_orejas_a_un_yorkshire_consejos_de_expertos_40265_600_square.jpg"},
    {raza: "Boyero de Berna", edadPromedio: "6 a 8 años", origen: "Suiza", imagen: "https://t2.ea.ltmcdn.com/es/razas/2/7/5/img_572_boyero-de-berna_0_orig.jpg"},
    {raza: "San Bernardo", edadPromedio: "8 a 10 años", origen: "Suiza, Italia", imagen: "https://t2.ea.ltmcdn.com/es/razas/1/6/1/img_161_san-bernardo_0_600.jpg"},
    {raza: "Dálmata", edadPromedio: "10 a 13 años", origen: "Croacia", imagen: "https://www.zooplus.es/magazine/wp-content/uploads/2020/01/D%C3%A1lmata.jpg"}
]

let tabla = document.querySelector('#razaPerros')

let contenidoTabla = '<tr><th>Raza</th><th>Edad promedio</th><th>Origen</th></tr><th>Imagen</th></tr>'
for (razaPerros of razasPerros){
    contenidoTabla = contenidoTabla + `<tr><td>${razaPerros.raza}</td><td>${razaPerros.edadPromedio}</td><td>${razaPerros.origen}</td><td><img width="500px" src="${razaPerros.imagen}" alt=""></td></tr>`
}

tabla.innerHTML = contenidoTabla
