// Ejercicio 4 - sueldo mensual

// pedir las horas y el valor de cada hora
let horasNormales = Number(prompt("Ingrese las horas normales trabajadas"));
let valorHoraNormal = Number(prompt("Ingrese el valor de la hora normal"));
let horasExtras = Number(prompt("Ingrese las horas extras trabajadas"));
let valorHoraExtra = Number(prompt("Ingrese el valor de la hora extra"));

// calcular los pagos
let pagoNormal = horasNormales * valorHoraNormal;
let pagoExtra = horasExtras * valorHoraExtra;
let sueldoMensual = pagoNormal + pagoExtra;

// mostrar los datos
document.write("Pago horas normales: $" + pagoNormal + "<br>");
document.write("Pago horas extras: $" + pagoExtra + "<br>");
document.write("Sueldo mensual: $" + sueldoMensual);