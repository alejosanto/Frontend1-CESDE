// Ejercicio 2 - Número mayor y menor

let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));

if (numero1 > numero2) {
    alert("El número mayor es: " + numero1 + " y el menor es: " + numero2);
} else if (numero2 > numero1) {
    alert("El número mayor es: " + numero2 + " y el menor es: " + numero1);
} else {
    alert("Los dos números son iguales");
}
