const miPromesa = new Promise (  (resolve, reject) => {
    setTimeout(() => {
        resolve('este es el valor que eventualmente devolverá la promesa');
    }, 300);
})

console.log(miPromesa);