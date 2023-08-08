//cómo usar nuestro propio json

fetch('./assets/data.json')
    .then( response => response.json())
    .then (data => {

        console.log(data);
        loadList(data);

    });

//otra opción:
function loadList(characters) {
    const characterList = document.querySelector('#characterList');
    characters.forEach(element => {        
        characterList.innerHTML += `
        <li><p>${element.name}</p>
        <img src='${element.imagen}' width="150px">
        </li>`
    });
};