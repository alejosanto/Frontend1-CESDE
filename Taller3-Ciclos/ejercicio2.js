// Ejercicio 2 - promedio de N notas

// pedir datos del estudiante
let nombre = prompt("Ingrese el nombre del estudiante");
let cantidadNotas = Number(prompt("Cuantas notas desea ingresar?"));
let sumaNotas = 0;

// pedir y sumar las notas
for (let i = 1; i <= cantidadNotas; i++) {
    let nota = Number(prompt("Ingrese la nota #" + i));
    sumaNotas = sumaNotas + nota;
}

// calcular promedio
let promedio = sumaNotas / cantidadNotas;

// mostrar los datos
document.write("Estudiante: " + nombre + "<br>");
document.write("Promedio: " + promedio.toFixed(2) + "<br>");

if (promedio >= 3) {
    document.write("Resultado: Aprueba");
} else {
    document.write("Resultado: Reprueba");
}