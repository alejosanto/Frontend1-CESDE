// Ejercicio 9 - productos con IVA del 19%

function pedirProductos(cantidad) {
    let subtotal = 0;
    for (let i = 1; i <= cantidad; i++) {
        let precio = Number(prompt("Ingrese el precio del producto " + i));
        document.write("Producto " + i + " = $" + precio + "<br>");
        subtotal = subtotal + precio;
    }
    return subtotal;
}

function calcularTotal(subtotal) {
    let iva = subtotal * 0.19;
    let total = subtotal + iva;
    document.write("Subtotal = $" + subtotal + "<br>");
    document.write("IVA = $" + iva + "<br>");
    document.write("Total a pagar = $" + total);
}

let cantidad = Number(prompt("Cuantos productos desea ingresar"));
let subtotal = pedirProductos(cantidad);
calcularTotal(subtotal);