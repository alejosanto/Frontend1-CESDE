// Ejercicio 2 - convertir kilometros a metros y millas

function convertirMetros(kilometros) {
    return kilometros * 1000;
}

function convertirMillas(kilometros) {
    return kilometros * 0.621371;
}

let kilometros = Number(prompt("Ingrese el valor en kilometros"));

document.write("Kilometros: " + kilometros + "<br>");
document.write("Metros: " + convertirMetros(kilometros) + "<br>");
document.write("Millas: " + convertirMillas(kilometros));