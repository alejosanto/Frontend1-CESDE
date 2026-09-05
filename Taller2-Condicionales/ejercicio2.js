// Ejercicio 2 - numero mayor y menor

let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));

if (numero1 > numero2) {
    document.write("Numero mayor: " + numero1 + "<br>");
    document.write("Numero menor: " + numero2);
} else if (numero2 > numero1) {
    document.write("Numero mayor: " + numero2 + "<br>");
    document.write("Numero menor: " + numero1);
} else {
    document.write("Los dos numeros son iguales");
}