// Ejercicio 1 - numero par o impar y positivo o negativo

let numero = Number(prompt("Ingrese un numero"));

if (numero === 0) {
    document.write("El numero es cero");
} else if (numero > 0) {
    if (numero % 2 === 0) {
        document.write("El numero es positivo y par");
    } else {
        document.write("El numero es positivo e impar");
    }
} else {
    if (numero % 2 === 0) {
        document.write("El numero es negativo y par");
    } else {
        document.write("El numero es negativo e impar");
    }
}