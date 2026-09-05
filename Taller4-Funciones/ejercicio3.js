// Ejercicio 3 - circunferencia y cubo

function circunferencia(radio) {
    return 2 * Math.PI * radio;
}

function cubo(numero) {
    return numero * numero * numero;
}

let radio = Number(prompt("Ingrese el radio del circulo"));
let numero = Number(prompt("Ingrese un numero para calcular su cubo"));

document.write("Circunferencia: " + circunferencia(radio) + "<br>");
document.write("Cubo de " + numero + ": " + cubo(numero));