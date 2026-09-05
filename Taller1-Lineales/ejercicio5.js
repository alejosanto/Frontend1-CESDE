// Ejercicio 5 - precio de producto e IVA

// pedir el precio
let precio = Number(prompt("Ingrese el precio del producto sin IVA"));

// calcular el IVA del 19%
let iva = precio * 0.19;
let total = precio + iva;

// mostrar los datos
document.write("Precio sin IVA: $" + precio + "<br>");
document.write("IVA 19%: $" + iva + "<br>");
document.write("Total a pagar: $" + total);