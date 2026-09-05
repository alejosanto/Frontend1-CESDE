// Ejercicio 11 - listado de compras

function pedirProductos(cantidad) {
    let total = 0;

    for (let i = 1; i <= cantidad; i++) {
        let nombre = prompt("Ingrese el nombre del producto " + i);
        let valor = Number(prompt("Ingrese el valor de " + nombre));
        let cantidadProducto = Number(prompt("Ingrese la cantidad de " + nombre));
        let subtotal = valor * cantidadProducto;

        document.write(i + " - " + nombre + " $" + valor + " x " + cantidadProducto + " = $" + subtotal + "<br>");
        total = total + subtotal;
    }

    return total;
}

function mostrarTotal(total) {
    document.write("Total Mercado: $" + total);
}

let numeroProductos = Number(prompt("Cuantos productos desea ingresar"));
let totalMercado = pedirProductos(numeroProductos);
mostrarTotal(totalMercado);