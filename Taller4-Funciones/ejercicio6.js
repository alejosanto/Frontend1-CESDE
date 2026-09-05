// Ejercicio 6 - conversor de temperatura

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function mensajeTemperatura(celsius) {
    if (celsius < 0) return "Nos congelamos";
    if (celsius >= 5 && celsius <= 15) return "Esta haciendo frio";
    if (celsius >= 16 && celsius <= 25) return "Esta templado el dia";
    if (celsius > 26) return "Tiene fiebre o es el apocalipsis";
    return "La temperatura no esta dentro de los rangos definidos en el taller";
}

let opcion = Number(prompt("Seleccione: 1. Celsius a Fahrenheit  2. Fahrenheit a Celsius"));
let temperatura = Number(prompt("Ingrese la temperatura"));
let celsius;

if (opcion === 1) {
    celsius = temperatura;
    document.write("Fahrenheit: " + celsiusAFahrenheit(temperatura) + "<br>");
    document.write(mensajeTemperatura(celsius));
} else if (opcion === 2) {
    celsius = fahrenheitACelsius(temperatura);
    document.write("Celsius: " + celsius + "<br>");
    document.write(mensajeTemperatura(celsius));
} else {
    document.write("Opcion no valida");
}