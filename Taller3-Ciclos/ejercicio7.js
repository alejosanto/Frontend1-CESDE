// Ejercicio 7 - contar regresivamente por intervalos

// pedir el intervalo
let intervalo = Number(prompt("Ingrese el numero del intervalo"));

// mostrar los datos
document.write("Conteo regresivo desde 30 en intervalos de " + intervalo + ":<br><br>");

for (let i = 30; i >= 1; i = i - intervalo) {
    document.write(i + "<br>");
}