// Ejercicio 2 - area de un triangulo

// pedir los datos
let base = Number(prompt("Ingrese la base del triangulo"));
let altura = Number(prompt("Ingrese la altura del triangulo"));

// calcular el area
let area = (base * altura) / 2;

// mostrar los datos
document.write("Base: " + base + "<br>");
document.write("Altura: " + altura + "<br>");
document.write("Area del triangulo: " + area);