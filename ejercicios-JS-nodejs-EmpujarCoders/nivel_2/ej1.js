//1 La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escriba una función que calcule el valor de una ecuación lineal, solveLinEquation.

function solveLinEquation(a, b, c, x) {
    // Despejar y en términos de x: y = (-ax - c) / b
    const y = (-a * x - c) / b;
    return y;
}

const a = 2;
const b = 3;
const c = 4;
const x = 5;

const result = solveLinEquation(a, b, c, x);
console.log(`Para x = ${x}, el valor de y es ${result}`);

// si mi ecuación lineal es:
// 2*5 + 3*y + 4 = 0
// 10 +3*y + 4 = 0
// 14 + 3*y = 0
// y = -14/3
// y = -4.6