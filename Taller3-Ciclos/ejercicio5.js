// Ejercicio 5 - tabla de multiplicar descendente

// pedir el numero
let numero = Number(prompt("Ingrese un numero para ver su tabla descendente"));

// mostrar la tabla desde 30 hasta 1
document.write("Tabla descendente del " + numero + "<br><br>");

for (let i = 30; i >= 1; i--) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}