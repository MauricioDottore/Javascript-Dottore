// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a, b) {
    return a + b;
}

let resultadoA = suma(5, 3);
console.log("Resultado de la suma:", resultadoA);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sumaConValidacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("¡Error! Uno de los parámetros no es un número.");
        return NaN;
    }
    return a + b;
}

let resultadoB = sumaConValidacion(5, "3");
console.log("Resultado de la suma con validación:", resultadoB);

// c. Crear una función validateInteger que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(num) {
    return Number.isInteger(num);
}

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function sumaConValidacionDeEnteros(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("¡Error! Uno de los números no es entero.");
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}

let resultadoD = sumaConValidacionDeEnteros(5.5, 3.3);
console.log("Resultado de la suma con validación de enteros:", resultadoD);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function validateIntegerWithinSum(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("¡Error! Uno de los números no es entero.");
        return true;
    }
    return false;
}

function sumaConValidacionDeEnterosSeparada(a, b) {
    if (validateIntegerWithinSum(a, b)) {
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}

let resultadoE = sumaConValidacionDeEnterosSeparada(5.5, 3.3);
console.log("Resultado de la suma con validación de enteros separada:", resultadoE);
