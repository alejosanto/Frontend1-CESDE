// Ejercicio 4 - validar un nombre

function mostrarNombre(nombre) {
    if (isNaN(nombre)) {
        document.write("Nombre ingresado: " + nombre);
    } else {
        document.write("Ingrese un nombre valido");
    }
}

let nombre = prompt("Ingrese su nombre");
mostrarNombre(nombre);