// Array de meses
let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a. Mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('Mes 5:', months[4]);  // Mayo (índice 4)
console.log('Mes 11:', months[10]); // Noviembre (índice 10)

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
let sortedMonths = [...months].sort();
console.log('Meses ordenados alfabéticamente:', sortedMonths);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
months.unshift('Inicio');
months.push('Fin');
console.log('Array después de agregar elementos al principio y al final:', months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();
console.log('Array después de quitar elementos del principio y del final:', months);

// e. Invertir el orden del array (utilizar reverse).
let reversedMonths = [...months].reverse();
console.log('Array invertido:', reversedMonths);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
let joinedMonths = months.join(' - ');
console.log('Meses unidos por guión:', joinedMonths);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
let sliceMonths = months.slice(4, 11); // Mayo (índice 4) hasta Noviembre (índice 10 inclusive)
console.log('Copia del array desde Mayo hasta Noviembre:', sliceMonths);
