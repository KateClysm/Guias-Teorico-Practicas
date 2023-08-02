const ol = document.createElement('ol');


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function (response){
//     return response.json()
// }).then(function (data) {
//     console.log(data);
//     data.forEach(function (post ){
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         ol.append(li);
//     });
//     document.body.append(ol);
// });

// console.log('linea 2');


//lo que tengo arriba es lo mismo que lo que tengo abajo.

async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);

    data.forEach(function (post ){
        const li = document.createElement('li');
        li.innerText = post.title;
        ol.append(li);
    });
    document.body.append(ol);
}
    
loadData();
console.log("linea 2");
