const url = 'https://pokeapi.co/api/v2/pokemon/3/'

fetch(url)
.then(response => response.json()) //primer promesa, convierto la respuesta a json
.then(data => {  //segunda promesa realizo lo que tengo que hacer
    
    let element = document.getElementById('element')
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.order}</p>
    <img src='${data.sprites.front_default}'></img>
    `
})
.catch(err => console.log('err'));