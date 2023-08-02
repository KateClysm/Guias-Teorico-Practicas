const title = document.createElement('h1')
title.innerText = 'Hola Mundo desde JS'

document.body.append(title)

const button = document.createElement('button')
button.innerText = 'click'
button.addEventListener('click', function () {
    title.innerText = 'Texto actualizado con JS'
    alert('Se realizó un click')
})

document.body.append(button)