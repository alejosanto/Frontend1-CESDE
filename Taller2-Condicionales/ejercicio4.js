// Ejercicio 4 - Clasificar la etapa de una persona por edad

let edad = Number(prompt("Ingrese su edad"));

if (edad < 18) {
    alert("Adolescente");
} else if (edad >= 18 && edad <= 28) {
    alert("Adulto adolescente");
} else if (edad >= 29 && edad <= 49) {
    alert("Adulto");
} else {
    alert("Adulto mayor");
}
