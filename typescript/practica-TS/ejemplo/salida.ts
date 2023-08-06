console.log('Hello World');

//declaración e inicialización de variables sin la aclaración de tipo
let myNumber  = 22;

//declaración e inicialización de variables con la aclaración de tipo
let myStringExample: string = "Este texto se dividirá en cada espacio";

//uso de operaciones de JS
const miArrayExample: string[] = myStringExample.split(" ");

console.log(myStringExample); //Este texto se dividirá en cada espacio
console.log(miArrayExample);  //[ 'Este', 'texto', 'se', 'dividirá', 'en', 'cada', 'espacio' ]

//uso del tipo any
let myFlexibleVar:any = "Hello";
myFlexibleVar = 22;

//arrays de distinto tipo
let ExampleArray:any[] = ["","",""];
ExampleArray = [true,"Hello",3]
console.log(ExampleArray);  //[ true, 'Hello', 3 ]
let ExampleArray2:any[] = [1, 2, true, "hello", [], {} ];


//arrays de un tipo en específico:
//notar que se aceptan elementos vacíos.
let StringArray:string[] = ["item1","item2",""];
let NumberArray:number[] = [1,2,3];
let BooleanArray:boolean[] = [true, false, false];


//tuple  :  array con orden específico
let strNumTuple: [string,number];
strNumTuple = ["Hello", 22];
console.log(strNumTuple);  //['Hello', 22 ]


//tipos de datos vacíos
let myVoid: void = undefined; //utilizado en funciones que no retornan nada
console.log(typeof(myVoid));  // undefined

let myNull: null = null; //ausencia intencional de un valor
console.log(typeof(myNull));  // object

let myUndefined: undefined = undefined; //valor no definido
console.log(typeof(myUndefined));  // undefined


//funciones

function getSum (num1:number, num2:number):number {
    return num1 + num2;
}

let mySum = function(//si pasamos un número en string, lo convierte a entero, luego los suma.
    num1:number | string ,
    num2:number | string) :number {

    if (typeof(num1) === 'string'){
        num1 = parseInt(num1);
    }
    if(typeof(num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
console.log(mySum('1',2));   //console: 3



//concatenaciones
function getName(firstName:string, lastName:string):string{
    return firstName + ' ' + lastName;
};

function getName2(firstName:string, lastName:string):string{
    return `${firstName} ${lastName}`
};

//parámetros opcionales
function getName3(firstName:string, lastName?:string):string {
    if (lastName == undefined){
        return `${firstName}`
    }
    return `${firstName} ${lastName}`
};

console.log(getName3('Kate')); //Kate
console.log(getName3('Kate', 'Monchot'));  //Kate Monchot


//interfaces: la estructura de un objeto
function showToDo(toDo){
    console.log(`${toDo.title} - ${toDo.text}`);
};

showToDo({
    title: 'Food',
    text: 'Carrots, Chicken, Potatoes, Cheese'
});  //console: Food - Carrots, Chicken, Potatoes, Cheese


//definición de las propiedades de la interfaz
function showToDo2(toDo: {title:string; text:string;}){
    console.log(`${toDo.title} - ${toDo.text}`);
};

//creación de inteface:
interface IToDo {
    title:string;
    text:string;
};
//uso de interface
function showToDo3(toDo: IToDo){
    console.log(`${toDo.title} - ${toDo.text}`);
};
//esta variable tiene que respetar la interface IToDo
let myToDo : IToDo = {
    title: 'My Day' , text: 'Breakfast, Gym, Study, Work'
};

showToDo3(myToDo); //console: My Day - Breakfast, Gym, Study, Work



//clases
class Persona {
    // Propiedades de la clase
    nombre: string;
    edad: number;
  
    // Constructor: se ejecuta cuando se crea una nueva instancia de la clase
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método de la clase
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  };

//Una vez que tienes la clase definida, puedes crear objetos basados en ella:
const persona1 = new Persona("Alice", 30);
const persona2 = new Persona("Bob", 25);

persona1.saludar(); //console: Hola, mi nombre es Alice y tengo 30 años.



//alcance público
class PersonaA {
    public nombre: string;
  
    public saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
  }
  
  const personaA = new PersonaA();
  personaA.nombre = "Alice"; // Acceso permitido, ya que la propiedad es pública
  personaA.saludar(); // Acceso permitido, ya que el método es público



//alcance privado
class PersonaB {
private edad: number;

constructor(edad: number) {
    this.edad = edad;
}

public getEdad() {
    return this.edad; // Acceso permitido, ya que está dentro de la clase
}
}

const personaB = new PersonaB(30);
console.log(personaB.getEdad()); // Acceso permitido a través del método público
// console.log(personaB.edad); // Error, no se puede acceder directamente a la propiedad privada


//alcance protected
class PersonaC {
    protected email: string;
  
    constructor(email: string) {
      this.email = email;
    }
  }
  
  class Empleado extends PersonaC {
    public getEmailFromParent() {
      return this.email; // Acceso permitido, ya que es una subclase y 'email' es protegido
    }
  }
  
  const empleado = new Empleado("correo@example.com");
  console.log(empleado.getEmailFromParent()); // Acceso permitido desde la subclase
  //console.log(empleado.email); // Error, no se puede acceder directamente a la propiedad protegida