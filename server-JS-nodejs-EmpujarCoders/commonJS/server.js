//este código hace que este archivo sea un servidor web

//este módulo viene incorporado dentro de node
//estamos utilizando commonjs así que importamos con require

const hello = require("./hello");  //funcionalidad
const http = require("node:http");

//este módulo me provee la funcionalidad del protocolo http
//en un resumen, el protocolo http me da el formato en el que se comunica el internet

//construimos un objeto llamado server porque va a cumplir esa funcionalidad
//lo construimos a través de un método del módulo http que acabamos de incorporar.
//dicho método se llama createServer y lleva un callback.

//require es lo que le llega al servidor desde el lado del front y response es lo que envía el servidor al lado del front.
//notemos que res es un objeto, y que estamos utilizando su método end.

const server = http.createServer( (req, res) => {

    //esto se va a terminar ejecutando cuando resiva una petición del lado del front.
    console.log("respuesta del servidor...");

    res.end(hello());
});

//configuramos un puerto en el que vaya a estar escuchando
//si bien el puerto lo declaramos nosotros, por defecto se suele poner 3000.
//también configuramos una constante host, esto nos servirá a futuro, si es que hacemos un deploy, podemos reemplazar el interior de host por el link.

const host ="Localhost";
const port = 3000;

//vamos a utilizar el método listen, que va a escuchar el puerto que le mandamos y va mandar a ejecutar un console log

server.listen(port, host, () => {
    console.log(`Server está corriendo en http://${host}:${port}`);
});

//cómo hacemos una petición dle lado del front? abramos el http://localhost:3000/ en google, luego, nuestra consola se actualizará.

//para cortar el run del servidor, usamos ctrl + C
//para volver a activarlo, escribimos en consola: node --watch {nombreDeNuestroArchivo}

//no es recomendable realizar funcionalidades en este archivo, es recomendado que este archivo sólo se dedique a la collección y envío de la información.
//todo lo demás, lo adquiriremos de archivos externos u archivos js.
