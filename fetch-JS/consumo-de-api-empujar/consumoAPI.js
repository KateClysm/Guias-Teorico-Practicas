//con fetch pedimos los datos de la api, (then)cuando estos cargan, los datos que nos devuelve los vamos a cargar a response,
//pero transformándolos en algo que sea entendible por javascript, ya que recordemos, json es un archivo string.
//(then)luego, a esa info que ahora js puede entender, nos la devuelve en data, con la cual vamos a hacer algo.
//en resumen, en fetch pongo la api, en data resivo la info

fetch('https://rickandmortyapi.com/api/character')
    .then( response => response.json())
    .then (data => {

        //usamos la función lodList, a la cual le pasamos una lista. Esta función luego irá agregando a un ul obtenido por su id, todos los nombres de los elementos que están en data.results(los personajes)
        loadList(data.results);

    });

//cargarLista

// function loadList(characters) {
//     const characterList = document.querySelector('#characterList');
//     for (let i = 0; i < characters.length; i++){
//         const element = characters[i].name; 
//         characterList.innerHTML += `<li>${element}</li>`
//     };
// };


//otra opción:
function loadList(characters) {
    const characterList = document.querySelector('#characterList');
    characters.forEach(element => {        
        characterList.innerHTML += `
        <li><p>${element.name}</p>
        <img src='${element.image}'>
        </li>`
    });
};