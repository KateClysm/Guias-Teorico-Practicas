//TYPESCRIPT

//mira estos videos:
//https://www.youtube.com/watch?v=wXBl5tZm-OQ&ab_channel=Fazt
//https://www.youtube.com/watch?v=P8ky7241Ndg&ab_channel=EDteam

//javascript en aplicaciones medianas o grandes, se vuelve bastante complicado de mantener y es difícil de areglar errores o bugs.

//Es por esta razós que aprox desde el año 2011, Microsoft empezó el desarrollo de un lenguaje que extendiera las funcionalidades de javascript con tipos de datos, soporte a módulos, un compilador, herramientas de desarrollo y la facilidad de integrarse con otras herramientas también.

//anteriormente, era preferible utilizar otros lenguajes, pero se trabajó en arreglar los errores o deficiencias que había en javascript en comparación con por ejemplo c# (otro lenguaje de programación), así fue, el inicio de typescript.

//En resumen, TypeScript es un lenguaje que está basado en la sintaxis de JavaScript, pero con funcionalidades que le permitiesen escalar fácilmente en proyectos medianos y grandes.

//Además, se buscaba que pudiese integrarse en proyectos ya existentes, y que los programas desarrollados con este lenguaje al final del desarrollo, pudieran convertirse en código estándar de JavaScript.

//TypeScript === un lenguaje netamente pensado para resolver los problemas que se presentaban en JavaScript y a su vez ser compatible u extenderlo.

//dato adicional: este proyecto fue liderado por el mismo creador de C#.

//CARACTERÍSTICAS:

//Static Typing -- Tipado Estático:
//TypeScript extiende a JavaScript agregándole tipos de datos. De allí viene el nombre "type" de typescript. Estos tipos de datos son opcionales, pero escribiéndolos, haces que tu código sea mucho más predecible y legible. En la práctica, esto puede significar escribir más código, pero al momento de crear un proyecto de una escala considerable, esto se traduce en una ventaja o en una facilidad de mantenimiento. Es decir que al momento de escribir sintaxis en JavaScript, tendrás que especificar muy bien a través de los tipos de datos qué es lo que hace tu código y no vas a tener 'sorpresas' al momento de ejecutarlo.
//También cabe destacar que gracias a estos tipos de datos, podemos obtener auto-ayudas como auto-completado de código, presentado de errores y mensajes de advertencia. Todo esto, gracias a la integración del compilador de TypeScript con herramientas de desarrollo como los editores de código.

//Un ejemplo sería Visual Studio Code, este es un editor desarrollado enteramente en TypeScript, y es el que probablemente posee la mayor integración con este lenguaje.

//TypeScript y ECMA Script
//El desarrollo de TypeScript está ligado a las nuevas características de ECMA Script, cuando escribes código en este lenguaje, puedes hacer uso de todas las características nuevas del estandar que van surgiendo sin preocuparte por cómo se van a implementar en tu código final, ya que, al final, el compilador de TypeScript se va a encargar de convertir todo el código moderno que estás utilizando, en código que pueda ser ejecutado por el intérprete, navegador, u entorno donde ejecutarás tu programa.

//Es decir, TypeScript nos ofrece una manera de convertir el código moderno a un código que sea soportado actualmente.

//Easy To Learn -- Fácil de aprender
//TypeScript tiene una barrera muy baja de aprendizaje, si conoces los conceptos básicos de JavaScript, ya puedes empezar en este lenguaje. Recordemos que TypesScript tan solo extiende a JavaScript.

//Open Source
//A pesar de ser un lenguaje desarrollado por Microsoft, es un lenguaje gratuito, open source.

//Nota: Desde mi punto de vista, no se tiene que ver este tópico como un JavaScript vs TypeScript. Es más correcto verlos como un combo, tecnologías que se complementan o una escalera, aprendes JS y luego, aprendes TypeScript. Es más un JavaScript&TypeScript.




//Diferencias de Sintáxis

//JavaScript
const sum = (a, b ) => a + b;

//TypeScript
const sum2 = (a:number, b:number) => {
    return a + b
}

//Por qué es interesante y útil este cambio de sintaxis?
//Bueno, si nosotros le pasamos a la función que hicimos con JavaScript a = 1 y b = 'Hola', JavaScript nos devolverá una concatenación de ambos: '1Hola' . Puede que no se note a simple vista, pero este modo de operar puede desencadenar muchos problemas a futuro, por ello, en TypeScript al definir qué tipo de valores recibimos de entrada, nos aseguramos de qué tipo de dato devolveremos. A su vez, si los valores de entrada no cumplen con el tipo que es requerido, nos avisará con un error.

//Ventajas:

// No tienes que aprender un nuevo lenguaje, subimos la escalera desde JS a TS.

//No tienes que esperar a que la aplicación esté en producción para darte cuenta de los errores, TS te alerta incluso cuando estas escribiendo el código sin tener que esperar a compilar.

//Las tecnologías de FrontEnd funcionan con TS. React, Angular, VUE, etc. 

//Puedes utilizar TS también en el backend, también en el servidor con Node.js

//Puedes utilizar TS en cualquier lugar donde puedas utilizar JS.

//TS agrega funciones adicionales a JS además del tipado, como clases e interfaces.

