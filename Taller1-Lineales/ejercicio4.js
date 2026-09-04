// Ejercicio 4 - Sueldo mensual

let horasNormales = parseFloat(prompt("Ingrese las horas normales trabajadas"));
let valorHoraNormal = parseFloat(prompt("Ingrese el valor de la hora normal"));
let horasExtras = parseFloat(prompt("Ingrese las horas extras trabajadas"));
let valorHoraExtra = parseFloat(prompt("Ingrese el valor de la hora extra"));

let pagoNormal = horasNormales * valorHoraNormal;
let pagoExtra = horasExtras * valorHoraExtra;
let sueldoMensual = pagoNormal + pagoExtra;

console.log("Pago por horas normales: " + pagoNormal);
console.log("Pago por horas extras: " + pagoExtra);
console.log("Sueldo mensual: " + sueldoMensual);
