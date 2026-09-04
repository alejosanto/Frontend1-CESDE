// Ejercicio 5 - Factura de venta según forma de pago

let producto1 = Number(prompt("Ingrese el valor del producto 1"));
let producto2 = Number(prompt("Ingrese el valor del producto 2"));
let producto3 = Number(prompt("Ingrese el valor del producto 3"));

let total = producto1 + producto2 + producto3;
let formaPago = Number(prompt("Forma de pago: 1. Efectivo  2. Cupón  3. Crédito"));
let totalFinal;

if (formaPago === 1) {
    totalFinal = total;
} else if (formaPago === 2) {
    totalFinal = total - (total * 0.03);
} else if (formaPago === 3) {
    totalFinal = total + (total * 0.05);
} else {
    alert("Forma de pago no válida");
}

if (formaPago >= 1 && formaPago <= 3) {
    alert("Total de productos: $" + total + "\nTotal a pagar: $" + totalFinal);
}
