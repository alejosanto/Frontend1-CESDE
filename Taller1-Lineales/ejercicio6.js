// Ejercicio 6 - porcentaje de alumnos y alumnas

// pedir la cantidad de estudiantes
let hombres = Number(prompt("Ingrese la cantidad de alumnos hombres"));
let mujeres = Number(prompt("Ingrese la cantidad de alumnas mujeres"));

// calcular los porcentajes
let total = hombres + mujeres;
let porcentajeHombres = (hombres * 100) / total;
let porcentajeMujeres = (mujeres * 100) / total;

// mostrar los datos
document.write("Total estudiantes: " + total + "<br>");
document.write("Porcentaje hombres: " + porcentajeHombres + "%<br>");
document.write("Porcentaje mujeres: " + porcentajeMujeres + "%");