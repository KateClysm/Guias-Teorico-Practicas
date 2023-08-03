//5 Declare un nombre de función swapValues. Esta función intercambia el valor de x a y.

// intercambiarValores(3, 4) // x => 4, y=>3
// intercambiarvalores(4, 5) // x = 5, y = 4

function swapValues(x,y){
    let aux = x;
    x = y;
    y = aux;
    console.log('x ahora es: ' + x + ' e y ahora es: ' + y);
};


swapValues(2,3);