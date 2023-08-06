var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello World');
//declaración e inicialización de variables sin la aclaración de tipo
var myNumber = 22;
//declaración e inicialización de variables con la aclaración de tipo
var myStringExample = "Este texto se dividirá en cada espacio";
//uso de operaciones de JS
var miArrayExample = myStringExample.split(" ");
console.log(myStringExample); //Este texto se dividirá en cada espacio
console.log(miArrayExample); //[ 'Este', 'texto', 'se', 'dividirá', 'en', 'cada', 'espacio' ]
//uso del tipo any
var myFlexibleVar = "Hello";
myFlexibleVar = 22;
//arrays de distinto tipo
var ExampleArray = ["", "", ""];
ExampleArray = [true, "Hello", 3];
console.log(ExampleArray); //[ true, 'Hello', 3 ]
var ExampleArray2 = [1, 2, true, "hello", [], {}];
//arrays de un tipo en específico:
//notar que se aceptan elementos vacíos.
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3];
var BooleanArray = [true, false, false];
//tuple  :  array con orden específico
var strNumTuple;
strNumTuple = ["Hello", 22];
console.log(strNumTuple); //['Hello', 22 ]
//tipos de datos vacíos
var myVoid = undefined; //utilizado en funciones que no retornan nada
console.log(typeof (myVoid)); // undefined
var myNull = null; //ausencia intencional de un valor
console.log(typeof (myNull)); // object
var myUndefined = undefined; //valor no definido
console.log(typeof (myUndefined)); // undefined
//funciones
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (//si pasamos un número en string, lo convierte a entero, luego los suma.
num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('1', 2)); //console: 3
//concatenaciones
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
;
function getName2(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
;
//parámetros opcionales
function getName3(firstName, lastName) {
    if (lastName == undefined) {
        return "".concat(firstName);
    }
    return "".concat(firstName, " ").concat(lastName);
}
;
console.log(getName3('Kate')); //Kate
console.log(getName3('Kate', 'Monchot')); //Kate Monchot
//interfaces: la estructura de un objeto
function showToDo(toDo) {
    console.log("".concat(toDo.title, " - ").concat(toDo.text));
}
;
showToDo({
    title: 'Food',
    text: 'Carrots, Chicken, Potatoes, Cheese'
}); //console: Food - Carrots, Chicken, Potatoes, Cheese
//definición de las propiedades de la interfaz
function showToDo2(toDo) {
    console.log("".concat(toDo.title, " - ").concat(toDo.text));
}
;
;
//uso de interface
function showToDo3(toDo) {
    console.log("".concat(toDo.title, " - ").concat(toDo.text));
}
;
//esta variable tiene que respetar la interface IToDo
var myToDo = {
    title: 'My Day', text: 'Breakfast, Gym, Study, Work'
};
showToDo3(myToDo); //console: My Day - Breakfast, Gym, Study, Work
//clases
var Persona = /** @class */ (function () {
    // Constructor: se ejecuta cuando se crea una nueva instancia de la clase
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método de la clase
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
;
//Una vez que tienes la clase definida, puedes crear objetos basados en ella:
var persona1 = new Persona("Alice", 30);
var persona2 = new Persona("Bob", 25);
persona1.saludar(); //console: Hola, mi nombre es Alice y tengo 30 años.
//alcance público
var PersonaA = /** @class */ (function () {
    function PersonaA() {
    }
    PersonaA.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, "."));
    };
    return PersonaA;
}());
var personaA = new PersonaA();
personaA.nombre = "Alice"; // Acceso permitido, ya que la propiedad es pública
personaA.saludar(); // Acceso permitido, ya que el método es público
//alcance privado
var PersonaB = /** @class */ (function () {
    function PersonaB(edad) {
        this.edad = edad;
    }
    PersonaB.prototype.getEdad = function () {
        return this.edad; // Acceso permitido, ya que está dentro de la clase
    };
    return PersonaB;
}());
var personaB = new PersonaB(30);
console.log(personaB.getEdad()); // Acceso permitido a través del método público
// console.log(personaB.edad); // Error, no se puede acceder directamente a la propiedad privada
//alcance protected
var PersonaC = /** @class */ (function () {
    function PersonaC(email) {
        this.email = email;
    }
    return PersonaC;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empleado.prototype.getEmailFromParent = function () {
        return this.email; // Acceso permitido, ya que es una subclase y 'email' es protegido
    };
    return Empleado;
}(PersonaC));
var empleado = new Empleado("correo@example.com");
console.log(empleado.getEmailFromParent()); // Acceso permitido desde la subclase
//console.log(empleado.email); // Error, no se puede acceder directamente a la propiedad protegida
