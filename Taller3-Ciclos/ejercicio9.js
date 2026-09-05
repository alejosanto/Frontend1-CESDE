// Ejercicio 9 - adivinar un numero aleatorio

// generar un numero aleatorio entre 1 y 10
// En el taller aparece Math.ramdon(), pero en JavaScript la funcion correcta es Math.random()
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let acerto = false;

// dar 3 intentos
for (let intento = 1; intento <= 3; intento++) {
    let numero = Number(prompt("Intento " + intento + " de 3. Ingrese un numero del 1 al 10"));

    if (numero === numeroAleatorio) {
        document.write("Acertaste. El numero era: " + numeroAleatorio);
        acerto = true;
        break;
    } else {
        alert("No acertaste en el intento " + intento);
    }
}

// mostrar el resultado final
if (acerto === false) {
    document.write("No acertaste. El numero era: " + numeroAleatorio);
}