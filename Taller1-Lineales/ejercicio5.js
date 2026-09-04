// Ejercicio 5 - Precio de un producto e IVA

let precio = parseFloat(prompt("Ingrese el precio del producto sin IVA"));
let porcentajeIva = 19;

let iva = precio * (porcentajeIva / 100);
let total = precio + iva;

console.log("Precio sin IVA: " + precio);
console.log("IVA agregado: " + iva);
console.log("Total a pagar: " + total);
