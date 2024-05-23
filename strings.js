// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
let text1 = "javascriptrocks";
let upperText1 = text1.toUpperCase();
console.log('Texto en mayúsculas:', upperText1);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
let text2 = "programming";
let firstFiveChars = text2.substring(0, 5);
console.log('Primeros 5 caracteres:', firstFiveChars);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
let text3 = "wonderful";
let lastThreeChars = text3.substring(text3.length - 3);
console.log('Últimos 3 caracteres:', lastThreeChars);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
let text4 = "beautifulday";
let capitalizedText4 = text4.substring(0, 1).toUpperCase() + text4.substring(1).toLowerCase();
console.log('Primera letra mayúscula:', capitalizedText4);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
let text5 = "hello world";
let firstSpacePosition = text5.indexOf(' ');
console.log('Posición del primer espacio en blanco:', firstSpacePosition);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
let text6 = "javascript programming";
let spacePosition = text6.indexOf(' ');
let firstWord = text6.substring(0, spacePosition);
let secondWord = text6.substring(spacePosition + 1);
let capitalizedWords = firstWord.substring(0, 1).toUpperCase() + firstWord.substring(1).toLowerCase() + ' ' +
secondWord.substring(0, 1).toUpperCase() + secondWord.substring(1).toLowerCase();
console.log('Palabras capitalizadas:', capitalizedWords);
