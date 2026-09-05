// Ejercicio 7 - promedio de 3 notas

// pedir las notas
let nota1 = Number(prompt("Ingrese la nota 1"));
let nota2 = Number(prompt("Ingrese la nota 2"));
let nota3 = Number(prompt("Ingrese la nota 3"));

// calcular el promedio
let promedio = (nota1 + nota2 + nota3) / 3;

// mostrar los datos
document.write("Nota 1: " + nota1 + "<br>");
document.write("Nota 2: " + nota2 + "<br>");
document.write("Nota 3: " + nota3 + "<br>");
document.write("Promedio: " + promedio);