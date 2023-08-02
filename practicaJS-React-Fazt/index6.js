const background = 'green';
const color = 'pink';

const isAuthorized = true;

const result = `estos son estilos: ${background} ${color}`;
console.log(result);

const button = document.createElement('button');
button.innerText = 'click me';

button.style = 'background: red; color: white; padding: 1rem ';
button.style = `background: ${background}; color: ${color}`;

//si isAuthorized is true, ponle un background blue, sino, uno red.
button.style = `background: ${isAuthorized ? 'blue' : 'yellow'}; color: ${color}`;
//utiliza la constante background
button.style = `background: ${isAuthorized ? background : 'yellow'}; color: ${color}`;



button.addEventListener('click', () => {
    if (isAuthorized) {
        alert('Está autorizado')
    } else {
        alert('No está autorizado')
    };
});

document.body.append(button);