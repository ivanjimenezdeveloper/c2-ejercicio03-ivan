/* Crea tu función aquí */
let stringFinal = "";

/**
 *
 * @param {string[]} palabras
 * @returns Mensaje con el análisis
 */
function analizaPalabras(palabras) {
  let contador = 0;
  for (const palabra of palabras) {
    contador++;
    stringFinal += "####\n";
    stringFinal += `Palabra ${contador}: ${palabra}\n`;
    stringFinal += `Nº Carácteres: ${palabra.length}\n`;
    stringFinal += `Deletreo ${deletrear(palabra)}\n`;
    stringFinal += `${esPar(palabra)} y ${comienzaPorMayuscula(palabra)}`;
    stringFinal += contieneBle(palabra);
  }
  stringFinal += "####\n";

  return stringFinal;
}

/**
 *
 * @param {string} palabra
 * @returns string con la palabra separando caracteres con guiones
 */
function deletrear(palabra) {
  let palabraDeletreada = palabra.charAt(0);
  for (const letra of palabra.slice(1)) {
    palabraDeletreada += `-${letra}`;
  }
  return palabraDeletreada;
}

/**
 * Comprueba la cantidad de carácteres sean par
 * @param {string} palabra
 * @returns string que dice si es par y si empieza por mayúscula
 */
function esPar(palabra) {
  let resto = palabra.length % 2;
  let toReturn;
  if (resto === 0) {
    toReturn = "La palabra es par";
  } else {
    toReturn = "La palabra es impar";
  }

  return toReturn;
}

/**
 * Comprueba si la palabra empieza por mayúscula
 * @param {string} palabra
 */
function comienzaPorMayuscula(palabra) {
  let toReturn = "";

  if (palabra[0].toUpperCase() === palabra[0]) {
    toReturn += "empieza por mayúscula. \n";
  } else {
    toReturn += "no empieza por mayúscula. \n";
  }

  return toReturn;
}

/**
 * Comprueba si la palabra contiene "ble"
 * @param {string} palabra
 * @returns
 */
function contieneBle(palabra) {
  if (palabra.includes("ble")) {
    return "La palabra sí incluye ble\n";
  } else {
    return "La palabra no incluye ble\n";
  }
}
