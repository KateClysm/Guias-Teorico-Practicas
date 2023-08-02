function hello(){
    //1 console.log('Hola Mundo')
    return 'Hola Mundo'

    //puede devolver un número, un booleano, un arreglo[], un objeto{}, otra función(esto es importante en react)
}
//1 hello()

//2 const result = hello()
//2 console.log(result)

console.log(hello())

//OBJETOS
//se representan con llaves {}

const user = {
    //propiedades
    //key: 'value',
    nombre: 'Maria',
    apellido: 'Monchot',
    edad: 23,
    direccion: {
        pais: 'Argentina',
        provincia: 'Chubut',
        ciudad: 'Trelew',
        calle: 'calle 123'
    },
    friends: ['Brandon', 'Elena'],  //arreglo o lista
    active: true,

    //Las propiedades que ejecutan funciones son conocidos como métodos
    // enviarCorreo: function(){
    //     return 'Enviando Email...'
    // }
    enviarCorreo(){
        return 'Enviando Email...'
    }
}

console.log(user)
console.log(user.direccion)
console.log(user.nombre)
//accede a la función del objeto
console.log(user.enviarCorreo())

