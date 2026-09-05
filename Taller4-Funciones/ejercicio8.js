// Ejercicio 8 - mensaje de bienvenida

function pedirNombre() {
    return prompt("Ingrese su nombre");
}

function mostrarBienvenida(nombre) {
    document.write("Bienvenido " + nombre);
}

let nombre = pedirNombre();
mostrarBienvenida(nombre);