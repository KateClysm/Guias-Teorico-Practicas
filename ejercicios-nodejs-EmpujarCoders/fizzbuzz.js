function fizzbuzz(){

    if (num % 15 == 0)  {
     console.log("FizzBuzz")
    }
    else if (((num) % 3) == 0){
     console.log("Fizz")
    }
    else if (((num) % 5) == 0){
     console.log("Buzz")
    }
    else {console.log(num)}
 
 }
 
 
 
 
//  function main (){
//     let numero;
//     let cumple = false;

//     for (let contador= 1; contador <= 100; contador++){
        
//         do{  //Mmientras no cumpla, lo va a seguir repitiendo, cuando cumple avanza el for.

//             console.log('Ingresa un número entero: ');

//             //PONER EN LA VARIABLE NUMERO UN NÚMERO LEÍDO POR TECLADO//

//             if ((isInteger(numero))  && (numero > 0  && numero <= 100)) {
//                 FizzBuzz(numero);
//                 cumple = true;
//             }
//             else {
//                 //LEO OTRO CARACTER
//                 cumple = false
//             }

//         }   while (cumple == false);

//      }
//  }


node.exports = fizzbuzz;