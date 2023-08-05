//Mira estos videos:
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

