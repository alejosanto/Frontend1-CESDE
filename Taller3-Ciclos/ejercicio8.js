// Ejercicio 8 - edades de 10 estudiantes

let menores = 0;
let mayores = 0;

// pedir la edad de 10 estudiantes
for (let i = 1; i <= 10; i++) {
    let edad = Number(prompt("Ingrese la edad del estudiante #" + i));

    if (edad < 18) {
        menores = menores + 1;
    } else {
        mayores = mayores + 1;
    }
}

// mostrar los datos
document.write("Estudiantes menores de edad: " + menores + "<br>");
document.write("Estudiantes mayores de edad: " + mayores);