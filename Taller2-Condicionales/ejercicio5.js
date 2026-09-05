// Ejercicio 5 - factura de venta

let producto1 = Number(prompt("Ingrese el valor del producto 1"));
let producto2 = Number(prompt("Ingrese el valor del producto 2"));
let producto3 = Number(prompt("Ingrese el valor del producto 3"));
let total = producto1 + producto2 + producto3;
let formaPago = Number(prompt("Forma de pago: 1. Efectivo  2. Cupon  3. Credito"));
let totalFinal = total;

if (formaPago === 2) {
    totalFinal = total - (total * 0.03);
} else if (formaPago === 3) {
    totalFinal = total + (total * 0.05);
}

document.write("Total productos: $" + total + "<br>");
if (formaPago === 1 || formaPago === 2 || formaPago === 3) {
    document.write("Total a pagar: $" + totalFinal);
} else {
    document.write("Forma de pago no valida");
}