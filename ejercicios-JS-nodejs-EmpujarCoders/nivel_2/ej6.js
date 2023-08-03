//6 Declare un nombre de función reverseArray. Toma una matriz como parámetro y devuelve el reverso de la matriz (no use el método).

// consola.log(matriz inversa([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// consola.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

const miArray =[1,2,3,4,5];

function reverseArray(matriz){
    let newArray = [];

    for (let i = matriz.length - 1; i >= 0; i--) {

        newArray.push(matriz[i]);     
    }
    
    return newArray;
};

console.log(reverseArray(miArray));
