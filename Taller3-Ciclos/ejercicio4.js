// Ejercicio 4 - tabla de multiplicar hasta el 30

// pedir el numero
let numero = Number(prompt("Ingrese un numero para ver su tabla de multiplicar"));

// mostrar la tabla
document.write("Tabla del " + numero + "<br><br>");

for (let i = 1; i <= 30; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}