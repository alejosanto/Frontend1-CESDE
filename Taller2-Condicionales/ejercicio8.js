// Ejercicio 8 - clinica Me Muero

let dias = Number(prompt("Ingrese los dias de hospitalizacion"));
let edad = Number(prompt("Ingrese la edad del paciente"));
let valorDia = 0;
let porcentajeRecargo = 0;

// valor del dia segun los dias hospitalizado
if (dias <= 1) {
    valorDia = 20000;
} else if (dias <= 4) {
    valorDia = 30000;
} else if (dias <= 7) {
    valorDia = 25000;
} else {
    valorDia = 15000;
}

// porcentaje de recargo segun edad y dias
if (edad <= 10 && dias >= 5 && dias <= 7) porcentajeRecargo = 0.05;
else if (edad <= 10 && dias >= 8) porcentajeRecargo = 0.10;
else if (edad <= 17 && dias >= 8) porcentajeRecargo = 0.10;
else if (edad <= 49 && dias >= 8) porcentajeRecargo = 0.15;
else if (edad >= 50 && dias >= 5 && dias <= 7) porcentajeRecargo = 0.15;
else if (edad >= 50 && dias >= 8) porcentajeRecargo = 0.20;

let subtotal = dias * valorDia;
let recargo = subtotal * porcentajeRecargo;
let total = subtotal + recargo;

// mostrar los datos
document.write("Dias de hospitalizacion: " + dias + "<br>");
document.write("Edad del paciente: " + edad + "<br>");
document.write("Valor por dia: $" + valorDia + "<br>");
document.write("Recargo: $" + recargo + "<br>");
document.write("Total a pagar: $" + total);