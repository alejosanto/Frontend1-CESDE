// Ejercicio 5 - operaciones basicas con una funcion

function operaciones(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br>");
    document.write("Division: " + (numero1 / numero2));
}

let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));
operaciones(numero1, numero2);