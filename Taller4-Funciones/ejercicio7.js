// Ejercicio 7 - indice de masa corporal

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function clasificarIMC(imc) {
    if (imc < 18.5) return "Bajo peso debe ir al nutricionista";
    if (imc <= 24.9) return "Normal";
    if (imc <= 29.9) return "Sobrepeso";
    return "Obeso debe ir al nutricionista";
}

let peso = Number(prompt("Ingrese el peso en kilogramos"));
let altura = Number(prompt("Ingrese la altura en metros"));
let imc = calcularIMC(peso, altura);

document.write("IMC: " + imc.toFixed(2) + "<br>");
document.write("Clasificacion: " + clasificarIMC(imc));