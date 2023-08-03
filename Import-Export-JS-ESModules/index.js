import {
    add,
    substract, 
    multiply,
    divide, 
    Math
} from "./math.js";

console.log(add(1,2));
console.log(substract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));

const math = new Math();
console.log(math.double(4));


//para importar por default lo que está en un módulo:
import myModuleMath from "./math.js";
console.log(myModuleMath);

console.log(myModuleMath.substract(100,50));