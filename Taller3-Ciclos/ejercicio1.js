// Ejercicio 1 - suma de los N numeros naturales

// pedir el numero limite
let n = Number(prompt("Ingrese el numero limite"));
let suma = 0;

// sumar los numeros desde 1 hasta N
for (let i = 1; i <= n; i++) {
    suma = suma + i;
}

// mostrar los datos
document.write("Numero limite: " + n + "<br>");
document.write("Suma de los numeros naturales: " + suma);