// Ejercicio 1 - superficie de un rectangulo

function calcularSuperficie(ancho, alto) {
    return ancho * alto;
}

let ancho = Number(prompt("Ingrese el ancho del rectangulo"));
let alto = Number(prompt("Ingrese el alto del rectangulo"));
let superficie = calcularSuperficie(ancho, alto);

document.write("Ancho: " + ancho + "<br>");
document.write("Alto: " + alto + "<br>");
document.write("Superficie: " + superficie);