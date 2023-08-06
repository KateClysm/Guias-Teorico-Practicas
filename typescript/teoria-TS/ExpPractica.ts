//Mira este video:
//https://www.youtube.com/watch?v=Xxqh0RoWxNc&t=2s&ab_channel=Fazt

//Instalación:
//Primeramente, debemos tener instalado Node.js
//Luego, escribe en la terminal, en la carpeta de tu proyecto: npm i typescript -g

//creamos nuestro archivo salida.js con un simple console.log('Hello World');
//creamos un archivo index.html y linkeamos nuestro ts, pero considerando que en vez de .ts, deberemos escribir .js, esto es debido a que compilaremos el código.

//Para comprobar que tengamos intalado TS: abriremos la terminal (click derecho sobre salida.ts y open in integrated terminal), allí escribiremos tsc --version

//Para compilar el código, escribiremos tsc salida.ts
//El resultado de esto será la generación de un archivo .js que contiene nuestro código totalmente traducido a JavaScript. Así de fácil es compilar nuestro código :)

//Por ahora, sólo tenemos un console.log, así que no verás diferencia en el código, pero si lo notarás cuando empieces a escribir en tu archivo .ts en sintaxis TypeScript y luego lo compiles a .js 




//Tipos de datos:
//String, Number, Boolean, Array, Any, Void, Null, Tuple, Enums, Generics.
//Clases:
//No protoTypes, encapsulation, inheritance, modifiers.


//Como ejemplo, declaremos la siguiente variable (descomentala):
//let myString = "Hello World";

//Algo curioso de TypeScript, es que luego de asignarle cierto contenido a una variable, luego no podremos asignarle un contenido de diferente tipo:

// var myString = 8;

//SI descomentas el código de arriba, notarás que TypeScript te da el siguiente aviso:
//Subsequent variable declarations must have the same type.  Variable 'myString' must be of type 'string', but here has type 'number'.

//Entendemos entonces, que luego de asignarle a una variable, por ejemplo, un string, en el futuro sólo podremos volver a asignarle contenido de tipo string.

//Algo que es importante, es que aunque te de un error en TypeScript, si la sintaxis es correcta según JS, luego de que lo compiles, no te dará ningún error en el archivo salida.js, y se le asignará a la variable myString el número 8. Por esto mismo es importante la resolución de los errores en el archivo .ts antes de su compilación.



//Compilación constante:
//Compilar manualmente el mismo archivo a cada rato seguro nos resultará tedioso en un futuro, por ello existe el comando 
//tsc salida.ts -w   
//o    
//tsc salida.ts --watch
//Estos comandos lo que significan es: 'Estoy observando tu código, haré la compilación a tiempo real'

//La consola debería devolverte lo siguiente:
//[18:27:50] Starting compilation in watch mode...

//cuando realices cambios, si no hay errores, deberís de aparecerte lo siguiente en consola:
//[18:29:18] File change detected. Starting incremental compilation..

//nosotros por ejemplo agregamos el siguiente código a salida.ts:
//var myNumber = 22;


//Volviendo al tema de los tipos de datos, cuando nosotros le damos un contenido a una variable, se está estableciendo por siempre el tipo de dato de manera automática, pero también podríamos establecerlo nosotros de la siguiente manera:

//let myString2:string = "Hello Again";

//nota que si hicieras :
//var myString2:number = "Hello Again";
//te dará error, porque es de tipo number y estás intentando asignarle un string.

//otros ejemplos:
//let myNumber:number = 22;
//let myBool:boolean = true;

//también podríamos operar con las típicas operaciones de JS:
//Si escribes myString2.split("")

//Te saldrá una ventana de TypeScript con el siguiente texto de ayuda:

//split(splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]
//An object that can split a string.
//Split a string into substrings using the specified separator and return them as an array.

//lo podríamos usar de la siguiente manera ((el código está comentado ya que interfiere con el código del archivo salida.js, pero lo puedes testear en dicho archivo)):

//let myStringExample: string = "Este texto se dividirá en cada espacio";
//const miArrayExample: string[] = myStringExample.split(" ");

//el método split(" ") separará las palabras de la cadena myString3 en un array cada vez que encuentre un espacio en blanco, de modo que miArray contendrá ["Este","texto", "se", "dividirá", "en", "cada", "espacio"].

//probémoslo en consola
//console.log(myStringExample);   nos imprimirá nuestro string
//console.log(miArrayExample);    nos imprimirá nuestro array de palabras separadas

//en la terminal, puedes escribir node ./salida.js para ver por consola el resultado, que debería de ser:

//Este texto se dividirá en cada espacio
//[ 'Este', 'texto', 'se', 'dividirá', 'en', 'cada', 'espacio' ]




//Tipo de dato any
//Con el tipo de dato any le estamos diciendo a nuestra variables que su tipo podrá cambiar o que puede tomar datos de cualquier tipo.

//let myVar:any = "hello";
//myVar = 22;
//myVar = false;



//Puede que te encuentres en la situación de querer hacer:
//const myNumberExample:number = 23;
//document.write(myNumberExample);
//Sin embargo, te toparás con un error. Para solucionarlo, deberás convertir todo a string antes de mostrarlo.
//document.write(myNumber.toString());



//Arrays

//let ExampleArray = ["", "", ""];
//ExampleArray = [1,2,3];
//Si hacemos esto, notaremos que nos dá un error, es debido a que en let StringArray estamos diciendo que será un array de strings, y luego estamos intentando pasarle números.

//Para solucionarlo, podríamos hacer:
//let ExampleArray:any[] = ["","",""];
//Esto significa, un array que va a contener elementos de distinto tipo.
//let ExampleArray:any[] = [1, 2, true, "hello", [], {} ];

//arrays de un tipo en específico:
//let StringArray:string[] = ["item1","item2",""]  
//notar que se aceptan elementos vacíos.
//let NumberArray:number[] = [1,2,3];
//let BooleanArray:boolean[] = [true, false, false];



//Tuple

//podemos tener arreglos definidos con estructura de tipo de datos. Supongamos que quisiéramos que el primer item quisiéramos que sea un número, y el segundo un string, y no quiero que esta estructura se intercambie o que sea de tipado fuerte (que cambie).

//let strNumTuple: [string,number];
//strNumTuple = ["Hello", 22];
//console.log(strNumTuple);  // consola: ['Hello', 22 ]

//si intentamos pasarle más de x elementos (en este caso 2) y estos elementos son de tipos que no concuerdan, nos dará un error.
//y si en cambio le pasamos otros dos elementos pero siguiendo el orden de string-número, no nos dará error, porque sólo está leyendo a los primeros dos elementos del array.
//importa que se cumpla la estructura/tipos del array, pero no importa que haya más elementos de los que se declararon, ya que sólo evalúa a los x primeros (en este caso, 2) que coincidan con lo que he definido.



//void, undefined, null
//tipos de datos vacíos

// undefined es un tipo que representa el valor "no definido". En TypeScript, es usado cuando una variable no tiene asignado un valor o cuando una función no retorna ningún valor explícitamente. Aquí tienes algunos ejemplos:
//let variableSinValor: undefined;
//console.log(variableSinValor); // Output: undefined

//null es un tipo que representa el valor nulo. En TypeScript, se utiliza para expresar la ausencia intencional de un valor. Puede ser asignado a una variable o ser retornado por una función. Aquí tienes algunos ejemplos:

// let variableNula: null = null;
// console.log(variableNula); // Output: null

// function funcionQueRetornaNull(): null {
//   return null;
// }

//void es un tipo especial en TypeScript que representa la ausencia de un tipo. Es comúnmente utilizado para indicar que una función no retorna ningún valor (es decir, que retorna undefined). No se puede utilizar void como un tipo de variable, solo se usa como tipo de retorno de una función. Aquí tienes un ejemplo:

// function funcionSinRetorno(): void {
//     console.log("Esta función no retorna ningún valor.");
//     // No se especifica un retorno, lo que implícitamente devuelve 'undefined'.
//   }



//functions

// function getSum (num1:number, num2:number):number {
//     return num1 + num2;
// }


//si pasamos un número en string, lo convierte a entero, luego los suma.
// let mySum = function(
//     num1:number | string ,
//     num2:number | string) :number {

//     if (typeof(num1) === 'string'){
//         num1 = parseInt(num1);
//     }
//     if(typeof(num2) === 'string') {
//         num2 = parseInt(num2);
//     }
//     return num1 + num2;
// }
// console.log(mySum('1',2));   //console: 3



//concatenaciones
// function getName(firstName:string, lastName:string):string{
//     return firstName + ' ' + lastName;
// };

// function getName2(firstName:string, lastName:string):string{
//     return `${firstName} ${lastName}`
// };




//parámetros opcionales
// function getName3(firstName:string, lastName?:string):string {
//     if (lastName == undefined){
//         return `${firstName}`
//     }
//     return `${firstName} ${lastName}`
// };

// console.log(getName3('Kate')); //Kate
// console.log(getName3('Kate', 'Monchot'));  //Kate Monchot



//interfaces: 
//Una interfaz en TypeScript es una forma de definir la estructura o forma que debe tener un objeto. Sirve como una especie de contrato o guía para los objetos que quieras que cumplan con ciertas propiedades o métodos específicos.

//En lugar de proporcionar una implementación real de las propiedades y métodos, una interfaz solo declara qué propiedades deben estar presentes en el objeto y qué tipos deben tener esas propiedades. Esto permite que TypeScript verifique que los objetos creados cumplan con las reglas definidas en la interfaz.
//Una interfaz en TypeScript se define usando la palabra clave interface. 

//Si intentaras crear un objeto sin alguna de las propiedades requeridas o con un tipo incorrecto, TypeScript te mostraría un error en tiempo de compilación, lo que te ayuda a detectar problemas en tu código antes de que se ejecute.

//Las interfaces son muy útiles para definir la estructura de los objetos en TypeScript y fomentan la tipificación segura y robusta en tu código.


// function showToDo(toDo){
//     console.log(`${toDo.title} - ${toDo.text}`);
// };

// showToDo({
//     title: 'Food',
//     text: 'Carrots, Chicken, Potatoes, Cheese'
// });  //console: Food - Carrots, Chicken, Potatoes, Cheese


// //definición de las propiedades de la interfaz
// function showToDo2(toDo: {title:string; text:string;}){
//     console.log(`${toDo.title} - ${toDo.text}`);
// };

// //otra manera:
// interface IToDo {
//     title:string;
//     text:string;
// };
// function showToDo3(toDo: IToDo){
//     console.log(`${toDo.title} - ${toDo.text}`);
// };


// //le decimos a nuestra variable: tienes la interfaz de IToDo
// let myToDo : IToDo = {
//     title: 'My Day' , text: 'Breakfast, Gym, Study, Work'
// };
//showToDo3(myToDo); //console: My Day - Breakfast, Gym, Study, Work

//Por ejemplo, el siguiente objeto no cumple con la interfaz y nos dará error:
// let myToDo : IToDo = {
//     title: 'My Day' , text: 'Breakfast, Gym, Study, Work', date: '11/02/2022'
// };


//Clases
//En TypeScript, una clase es una plantilla o un "molde" para crear objetos con características y comportamientos específicos. Se puede pensar en una clase como una descripción de cómo debe ser un objeto y qué acciones puede realizar. Una vez definida una clase, puedes crear múltiples instancias u objetos basados en esa clase.

//Las clases en TypeScript se definen utilizando la palabra clave class. Una clase puede tener propiedades (variables) y métodos (funciones) que definen su estado y comportamiento.

// class Persona {
//     // Propiedades de la clase
//     nombre: string;
//     edad: number;
  
//     // Constructor: se ejecuta cuando se crea una nueva instancia de la clase
//     constructor(nombre: string, edad: number) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }
  
//     // Método de la clase
//     saludar() {
//       console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
//     }
//   }

//Una vez que tienes la clase definida, puedes crear objetos basados en ella:
// const persona1 = new Persona("Alice", 30);
// const persona2 = new Persona("Bob", 25);
//persona1.saludar(); //console: Hola, mi nombre es Alice y tengo 30 años.

//Las clases en TypeScript permiten organizar y estructurar el código de manera más clara y modular, lo que facilita la reutilización de código y el mantenimiento de la aplicación.



//alcance

//En TypeScript (y en otros lenguajes de programación orientados a objetos), los modificadores son palabras clave que se utilizan para controlar el alcance y la visibilidad de las propiedades y métodos de una clase. Los modificadores permiten definir qué partes de una clase pueden acceder a las propiedades y métodos de esa clase desde fuera de su contexto.

//En TypeScript, hay tres modificadores principales que se pueden aplicar a las propiedades y métodos de una clase:

//public:
//El modificador public es el modificador predeterminado si no se especifica ninguno. Una propiedad o método marcado como public es accesible desde cualquier lugar, tanto desde dentro de la clase como desde fuera de ella.

// class Persona {
//     public nombre: string;
  
//     public saludar() {
//       console.log(`Hola, mi nombre es ${this.nombre}.`);
//     }
//   }
  
//   const persona = new Persona();
//   persona.nombre = "Alice"; // Acceso permitido, ya que la propiedad es pública
//   persona.saludar(); // Acceso permitido, ya que el método es público

// private:
// El modificador private hace que una propiedad o método solo sea accesible desde dentro de la clase donde se definió. No se puede acceder a una propiedad o método marcado como private desde fuera de la clase.

// class Persona {
//     private edad: number;
  
//     constructor(edad: number) {
//       this.edad = edad;
//     }
  
//     public getEdad() {
//       return this.edad; // Acceso permitido, ya que está dentro de la clase
//     }
//   }
  
//   const persona = new Persona(30);
//   console.log(persona.getEdad()); // Acceso permitido a través del método público
//   console.log(persona.edad); // Error, no se puede acceder directamente a la propiedad privada

// protected:
// El modificador protected hace que una propiedad o método sea accesible desde dentro de la clase donde se definió y también desde las clases que hereden de ella. No se puede acceder a una propiedad o método marcado como protected desde fuera de la clase o sus subclases.

// class Persona {
//     protected email: string;
  
//     constructor(email: string) {
//       this.email = email;
//     }
//   }
  
//   class Empleado extends Persona {
//     public getEmailFromParent() {
//       return this.email; // Acceso permitido, ya que es una subclase y 'email' es protegido
//     }
//   }
  
//   const empleado = new Empleado("correo@example.com");
//   console.log(empleado.getEmailFromParent()); // Acceso permitido desde la subclase
//   console.log(empleado.email); // Error, no se puede acceder directamente a la propiedad protegida

//Estos modificadores nos permiten controlar la encapsulación y la seguridad de nuestras clases y nos ayudan a evitar que el código acceda a partes sensibles de la clase desde fuera de su contexto apropiado.

console.log('Hey! sólo estoy agregando esta línea de código para que este archivo se pueda visualizar en github :)')