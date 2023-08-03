const app = document.getElementById("app");

//colección de objetos
const games = [
    {
        name: "Alice",
        year: 2000,
        texto: "Este es un breve texto de ejemplo"
    },
    {
        name: "Barbie",
        year: 2002,
        texto: "Este es otro breve texto de ejemplo"
    },
    {
        name: "Cintia",
        year: 2010,
        texto: "Este es el último breve texto de ejemplo"
    }
];

const [gameOne, gameTwo, gameThree] = games;


function card ({name, year, texto}){
    return  `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
            ${year}
            </p>
            <a href="#">${texto}</a>
        </div>
    </div>
    `
};

app.innerHTML += card(gameOne);
app.innerHTML += card(gameTwo);
app.innerHTML += card(gameThree);