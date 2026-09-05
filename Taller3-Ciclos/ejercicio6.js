// Ejercicio 6 - contar del 1 al 30 por intervalos

// pedir el intervalo
let intervalo = Number(prompt("Ingrese el numero del intervalo"));

// mostrar los datos
document.write("Conteo de 1 a 30 en intervalos de " + intervalo + ":<br><br>");

for (let i = 1; i <= 30; i = i + intervalo) {
    document.write(i + "<br>");
}