
function GenerarEdades(){
    let adultos = document.getElementById('adultos').value;
    content = document.getElementById('ninoContenedor');
    var num_ninos = adultos; // número de veces que se desea repetir la etiqueta
    
    switch(adultos){
        case '0':
            num_ninos = 0;
            break;
        case '1':
            num_ninos = 4;
            break;
        case '2':
            num_ninos = 3;
            break;
        case '3':
            num_ninos = 2;
            break;
        case '4':
            num_ninos = 1;
            break;
        case '5':
            num_ninos = 0;
            break;
    }

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    for (var i = 0; i < num_ninos; i++) {
        // Crear el contenedor principal
        var contenedor = document.createElement("div");
        contenedor.setAttribute("id", "ninoContenedor"+i);
        
        // Crear el elemento de texto "Niño:"
        var nino = document.createElement("p");
        nino.textContent = "Niño " + (i+1) + ": ";
        
        // Crear el contenedor para la edad
        var edad = document.createElement("div");
        edad.setAttribute("id", "ninos"+i);
        
        // Crear el elemento de texto "Edad"
        var edad_text = document.createElement("p");
        edad_text.textContent = "Edad";
        
        // Crear el campo de entrada de edad
        var edad_input = document.createElement("input");
        edad_input.setAttribute("type", "number");
        edad_input.setAttribute("placeholder", "0");
        edad_input.setAttribute("id", "inputEdad"+i);
        
        // Agregar los elementos al contenedor principal y al contenedor de edad
        contenedor.appendChild(nino);
        contenedor.appendChild(edad);
        edad.appendChild(edad_text);
        edad.appendChild(edad_input);
        
        // Agregar el contenedor principal al cuerpo del documento
        content.appendChild(contenedor);
    }
}

function Generar(){
    let adultos = document.getElementById('adultos').value;
    let nombre  = document.getElementById('nombreRes').value;
    localStorage.setItem("nombre", nombre);
    let correo = document.getElementById('correo').value;
    localStorage.setItem("correo", correo);
    let lugar = document.getElementById('lugar').value;
    localStorage.setItem("lugar", lugar);
    let habitaciones = document.getElementById('habitaciones').value;
    localStorage.setItem("habitaciones", habitaciones);


    switch(adultos){
        case '0':
            num_ninos = 0;
            break;
        case '1':
            num_ninos = 4;
            break;
        case '2':
            num_ninos = 3;
            break;
        case '3':
            num_ninos = 2;
            break;
        case '4':
            num_ninos = 1;
            break;
        case '5':
            num_ninos = 0;
            break;
    }

    var ninos = new Array(num_ninos).fill("vacío");

    for (var i = 0; i < num_ninos; i++) {
        ninos[i] = document.getElementById('inputEdad'+i).value;
        console.debug(ninos[i]);
    }

    localStorage.setItem("Arreglo", JSON.stringify(ninos));

    window.location.href = "ticket.html";


}