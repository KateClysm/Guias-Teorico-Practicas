// console.log(fetch("data.json"));

//el fetch devuelve una promesa.
//qué es una promesa?
//no es nada más que un contrato u acuerdo. Los datos que nosotros estamos queriendo fetchear/traer, se pueden demorar o quizá puede haber un error. 
//las promesas, prometen hacer algo cuando los datos lleguen.

//el then resive la respuesta positiva de nuestra promesa. es como decir "cuando se cumpla, entonces haré..."

// fetch("data.json").then( (res) => {
//     console.log(res)
// });

//en los parámetros puedes inventarte la variable que quieras, en este caso, res.

//los archivos json son strings.
//Por ello, debemos trasformarlos en algo que pueda interpretar js, esto lo hacemos con un método llamado json que tiene incorporada la respuesta. Éste método transforma el json en algo que entienda js.
//tenemos que tener en cuenta que este res.json es otra promesa, por lo tanto, debemos usar otro then.

fetch("data.json")
    .then( (res) => {res.json()
        .then( (data) =>  {
            console.log(data);
        })
});