// Ejercicio 1 - Número par o impar y positivo o negativo

let numero = Number(prompt("Ingrese un número"));

if (numero > 0) {
    if (numero % 2 === 0) {
        alert("El número es positivo y par");
    } else {
        alert("El número es positivo e impar");
    }
} else if (numero < 0) {
    if (numero % 2 === 0) {
        alert("El número es negativo y par");
    } else {
        alert("El número es negativo e impar");
    }
} else {
    alert("El número es cero");
}
