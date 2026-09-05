// Ejercicio 10 - dias y semanas para terminar el año

function pedirFecha() {
    return prompt("Ingrese la fecha actual en formato AAAA-MM-DD");
}

function calcularTiempo(fechaTexto) {
    let fecha = new Date(fechaTexto + "T00:00:00");
    let finAnio = new Date(fecha.getFullYear(), 11, 31);
    let diferencia = finAnio - fecha;
    let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    let semanas = dias / 7;

    document.write("Fecha ingresada: " + fechaTexto + "<br>");
    document.write("Dias para terminar el año: " + dias + "<br>");
    document.write("Semanas aproximadas: " + semanas.toFixed(2));
}

let fechaActual = pedirFecha();
calcularTiempo(fechaActual);