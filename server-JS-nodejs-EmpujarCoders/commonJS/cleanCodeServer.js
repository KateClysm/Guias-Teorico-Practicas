const hello = require("./hello");  
const http = require("node:http");

const server = http.createServer( (req, res) => {
    console.log("respuesta del servidor...");
    res.end(hello());
});

const host ="Localhost";
const port = 3000;

server.listen(port, host, () => {
    console.log(`Server está corriendo en http://${host}:${port}`);
});