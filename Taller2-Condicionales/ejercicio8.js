// Ejercicio 8 - Costos de hospitalización en la clínica Me Muero

let dias = parseInt(prompt("Ingrese la cantidad de días de hospitalización"));
let edad = parseInt(prompt("Ingrese la edad del paciente"));

let valorDia = 0;
let recargo = 0;

if (dias <= 1) {
    valorDia = 20000;
} else if (dias <= 4) {
    valorDia = 30000;
} else if (dias <= 7) {
    valorDia = 25000;
} else {
    valorDia = 15000;
}

let subtotal = dias * valorDia;

if (edad <= 10) {
    if (dias >= 5 && dias <= 7) {
        recargo = subtotal * 0.05;
    } else if (dias >= 8) {
        recargo = subtotal * 0.10;
    }
} else if (edad <= 17) {
    if (dias >= 8) {
        recargo = subtotal * 0.10;
    }
} else if (edad <= 49) {
    if (dias >= 8) {
        recargo = subtotal * 0.15;
    }
} else {
    if (dias >= 5 && dias <= 7) {
        recargo = subtotal * 0.15;
    } else if (dias >= 8) {
        recargo = subtotal * 0.20;
    }
}

let total = subtotal + recargo;

alert(
    "Días de hospitalización: " + dias +
    "\nValor día: $" + valorDia +
    "\nValor del recargo: $" + recargo +
    "\nTotal a pagar: $" + total
);
