// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0.5 mostrar una alerta con el mensaje "Greater than 0.5" y sino un alerta con el mensaje "Lower than 0.5".
let randomNumber = Math.random();
if (randomNumber >= 0.5) {
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

// b. Crear una variable "Age" que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
let age = Math.floor(Math.random() * 101); // Genera un número entero aleatorio entre 0 y 100
if (age < 2) {
    alert("Bebe");
} else if (age >= 2 && age <= 12) {
    alert("Niño");
} else if (age >= 13 && age <= 19) {
    alert("Adolescente");
} else if (age >= 20 && age <= 30) {
    alert("Joven");
} else if (age >= 31 && age <= 60) {
    alert("Adulto");
} else if (age >= 61 && age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}
