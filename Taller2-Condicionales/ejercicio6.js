// Ejercicio 6 - Promedio y nivel del alumno

let nota1 = Number(prompt("Ingrese la nota 1"));
let nota2 = Number(prompt("Ingrese la nota 2"));
let nota3 = Number(prompt("Ingrese la nota 3"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio < 2.0) {
    alert("Promedio: " + promedio + "\nNivel: Malo");
} else if (promedio < 3.0) {
    alert("Promedio: " + promedio + "\nNivel: Debe recuperar");
} else if (promedio < 4.0) {
    alert("Promedio: " + promedio + "\nNivel: Regular");
} else if (promedio < 4.5) {
    alert("Promedio: " + promedio + "\nNivel: Bueno");
} else {
    alert("Promedio: " + promedio + "\nNivel: Muy bueno");
}
