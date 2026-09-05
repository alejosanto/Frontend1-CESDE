// Ejercicio 3 - ingresar numeros hasta escribir FIN

let cantidad = 0;
let suma = 0;
let dato = prompt("Ingrese un numero o escriba FIN para terminar");

// repetir hasta que el usuario escriba FIN
while (dato.toUpperCase() !== "FIN") {
    let numero = Number(dato);
    cantidad = cantidad + 1;
    suma = suma + numero;

    dato = prompt("Ingrese otro numero o escriba FIN para terminar");
}

// mostrar los datos
document.write("Cantidad de numeros ingresados: " + cantidad + "<br>");
document.write("Suma de los numeros: " + suma);