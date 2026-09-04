// Ejercicio 7 - Calcular edad actual con fecha de nacimiento

let dia = parseInt(prompt("Ingrese el día de nacimiento"));
let mes = parseInt(prompt("Ingrese el mes de nacimiento"));
let anio = parseInt(prompt("Ingrese el año de nacimiento"));

let fechaNacimiento = new Date(anio, mes - 1, dia);
let fechaActual = new Date();

let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

if (
    fechaActual.getMonth() < fechaNacimiento.getMonth() ||
    (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
    fechaActual.getDate() < fechaNacimiento.getDate())
) {
    edad = edad - 1;
}

alert("La edad actual es: " + edad + " años");
