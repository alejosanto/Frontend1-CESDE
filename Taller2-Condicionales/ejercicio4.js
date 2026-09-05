// Ejercicio 4 - clasificar etapa segun la edad

let edad = Number(prompt("Ingrese la edad"));

if (edad < 18) {
    document.write("Adolescente");
} else if (edad <= 28) {
    document.write("Adulto adolescente");
} else if (edad <= 49) {
    document.write("Adulto");
} else {
    document.write("Adulto mayor");
}