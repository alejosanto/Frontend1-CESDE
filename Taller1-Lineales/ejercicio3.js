// Ejercicio 3 - operaciones basicas

// pedir los dos numeros
let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));

// realizar las operaciones
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

// mostrar los datos
document.write("Suma: " + suma + "<br>");
document.write("Resta: " + resta + "<br>");
document.write("Multiplicacion: " + multiplicacion + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulo: " + modulo);