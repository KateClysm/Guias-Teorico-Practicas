const user = {
    name: "joe",
    age: 30
};

// function printInfo(usuario){
//     return '<h1>Hola ' + usuario.name + '</h1>';
// }
// console.log(printInfo(user));
// document.body.innerHTML = printInfo(user);


function printInfo2({ name }){
    return "<h1>Hola " + name + "</h1>";
}
document.body.innerHTML = printInfo2(user);


// function printInfo(user){
//     const {name, age} = user;

//     console.log(name,age);
//     return "<h1>Hola " + age + "</h1>";
// }

// console.log(printInfo(user));



//FUNCIONES QUE NO TIENEN NOMBRE O FUNCIONES ANÓNIMAS

function start(){
    return 'Starting...'
};

console.log(start());

console.log(function start(){
    return 'Starting...'
})

console.log(function start(){
    return 'Starting...'
}());

console.log(function (){
    return 'Starting...'
}());

///////////////////////////

const button = document.createElement('button');

button.innerText = 'click me';

button.addEventListener('click', function (){
    alert('clicked');
});

document.body.append(button);

///////////////////////////

function handleClick(){
    alert('clicked');
}

button.addEventListener('click', handleClick());


//////////////////////////

