//ARROW FUNCTION

// function add(x,y){
//     return x + y;
// };

const add = (x,y) => {
    return x + y;
}

console.log(add(5,3));


//esto
const showText = () => {
    return 'Hola Mundo'
};
//es lo mismo que
const showText2 = () => 'Hola Mundo';

console.log(showText());
console.log(showText2());

//cómo devolver un objeto: es importante los paréntesis al rededor del objeto
const showObject = () => ({name:'ryan'});

console.log(showObject());