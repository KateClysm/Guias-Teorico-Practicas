//2 La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

function solveQuadEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
  
    if (discriminant > 0) {
      // Dos soluciones reales
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [x1, x2];
    } else if (discriminant === 0) {
      // Solución doble
      const x = -b / (2 * a);
      return [x];
    } else {
      // Sin solución real
      return [];
    }
  }
//utilizamos la función Math.sqrt() para calcular la raíz cuadrada del discriminante.

//bhaskara:
//x = (-b ± √(b^2 - 4ac)) / 2a
//Esta fórmula nos dará dos posibles valores de x, ya que la ecuación cuadrática puede tener dos soluciones, una solución doble o ninguna solución real.

//Recuerda que en la fórmula cuadrática, si el discriminante es negativo, la ecuación no tiene soluciones reales, por lo que la función devolverá un arreglo vacío []. En caso contrario, devolverá los valores de x correspondientes.


consola.log(solveQuadratic()) // {0}
consola.log(solveQuadratic(1, 4, 4)) // {-2}
consola.log(solveQuadratic(1, -1, -2)) // {2, -1}
consola.log(solveQuadratic(1, 7, 12)) // {-3, -4}
consola.log(solveQuadratic(1, 0, -4)) //{2, -2}
consola.log(solveQuadratic(1, -1, 0)) //{1, 0}

