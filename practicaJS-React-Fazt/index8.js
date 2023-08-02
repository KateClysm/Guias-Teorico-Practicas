const person = {
    name: 'ryan',
    address: {
        city: 'london'
    },
    //location: {city: 'angeles'}
};

console.log(person.address.city);


//accede a un valor si existe y sino devuélveme undefined
console.log(person.location?.city);