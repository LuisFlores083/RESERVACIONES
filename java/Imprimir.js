(function(){
    var nombre = localStorage.getItem("nombre");
    var correo = localStorage.getItem("correo");
    var lugar = localStorage.getItem("lugar");
    var habitaciones = localStorage.getItem("habitaciones");

    document.getElementById('pNombre').innerHTML = nombre;
    document.getElementById('pCorreo').innerHTML = correo;
    document.getElementById('pLugar').innerHTML = lugar;
    document.getElementById('pHabitaciones').innerHTML = habitaciones;


    var arreglo = JSON.parse(localStorage.getItem("Arreglo"));
      var lista = "";

      for (var i = 0; i < arreglo.length; i++) {
        lista += '<p>Niño '+ (i+1) + '</p>' + '<p>-> edad: ' + arreglo[i] + '</p><br>';
      }

      document.getElementById("lista").innerHTML = lista;
})();