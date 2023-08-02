const button = document.createElement('button');
button.innerText = 'click me';

const isAuthorized = false;

button.addEventListener('click', () => {
    if (isAuthorized) {
        alert('Está autorizado')
    } else {
        alert('No está autorizado')
    };
});

document.body.append(button);

//es lo mismo que:

button.addEventListener('click', () => {

    //entra al if, si es true retorna (corta y finaliza la función)
    if (isAuthorized) {
        return ('Está autorizado')
    } 
    //si fue falto, accede a la siguiente línea de código
    alert('No está autorizado')
    
});

//no se debe poner un return como primera linea de código, ya que las siguientes jamás se evaluarían. 
//al menos el primer return, debe estar acompañado por una condición que lo limite.

