// Ejercicio 1 - Salario con descuentos

let salario = parseFloat(prompt("Ingrese el salario del trabajador"));

let salud = salario * 0.04;
let pension = salario * 0.07;
let salarioFinal = salario - salud - pension;

console.log("Descuento salud: " + salud);
console.log("Descuento pension: " + pension);
console.log("Salario final: " + salarioFinal);
