// Ejercicio 1 - salario con descuentos

// pedir el salario
let salario = Number(prompt("Ingrese el salario del trabajador"));

// calcular los descuentos
let salud = salario * 0.04;
let pension = salario * 0.07;
let salarioFinal = salario - salud - pension;

// mostrar los datos
document.write("Salario inicial: $" + salario + "<br>");
document.write("Descuento salud: $" + salud + "<br>");
document.write("Descuento pension: $" + pension + "<br>");
document.write("Salario final: $" + salarioFinal);