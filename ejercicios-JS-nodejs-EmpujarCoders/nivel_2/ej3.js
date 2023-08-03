//3 Declare un nombre de función printArray. Toma matriz como parámetro e imprime cada valor de la matriz.
const myArray = [1, 'Maria', true, 4.0, 5];


function printArray(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i]);
    }
  }

  printArray(myArray);