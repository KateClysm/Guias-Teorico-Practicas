// 15 Math.max devuelve su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.

// consola.log(buscarMax(0, 10, 5))
// consola.log(buscarMax(0, -10, -2))

function findMax (num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    }
    else{
        console.log(num3)
    }
};

findMax(0,10,5);
findMax(0, -10, -2);
findMax(1, 5, 20);

