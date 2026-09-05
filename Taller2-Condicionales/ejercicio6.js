// Ejercicio 6 - promedio y nivel del estudiante

let nota1 = Number(prompt("Ingrese la nota 1"));
let nota2 = Number(prompt("Ingrese la nota 2"));
let nota3 = Number(prompt("Ingrese la nota 3"));
let promedio = (nota1 + nota2 + nota3) / 3;
let nivel;

if (promedio < 2.0) {
    nivel = "Malo";
} else if (promedio < 3.0) {
    nivel = "Debe recuperar";
} else if (promedio < 4.0) {
    nivel = "Regular";
} else if (promedio < 4.5) {
    nivel = "Bueno";
} else {
    nivel = "Muy bueno";
}

document.write("Promedio: " + promedio.toFixed(2) + "<br>");
document.write("Nivel: " + nivel);