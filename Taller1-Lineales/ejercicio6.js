// Ejercicio 6 - Porcentaje de alumnos y alumnas

let hombres = parseInt(prompt("Ingrese la cantidad de alumnos hombres"));
let mujeres = parseInt(prompt("Ingrese la cantidad de alumnas mujeres"));

let total = hombres + mujeres;
let porcentajeHombres = (hombres * 100) / total;
let porcentajeMujeres = (mujeres * 100) / total;

console.log("Total de estudiantes: " + total);
console.log("Porcentaje de hombres: " + porcentajeHombres + "%");
console.log("Porcentaje de mujeres: " + porcentajeMujeres + "%");
