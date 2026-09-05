// Ejercicio 7 - calcular edad actual

let dia = Number(prompt("Ingrese el dia de nacimiento"));
let mes = Number(prompt("Ingrese el mes de nacimiento"));
let anio = Number(prompt("Ingrese el año de nacimiento"));

let fechaNacimiento = new Date(anio, mes - 1, dia);
let fechaActual = new Date();
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
    edad--;
}

document.write("Fecha de nacimiento: " + dia + "/" + mes + "/" + anio + "<br>");
document.write("Edad actual: " + edad + " años");