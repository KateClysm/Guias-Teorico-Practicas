//4 Escriba un nombre de función showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
// mostrarfechahora()
// 01/08/2020 04:08

const Date = {     //un objeto con dos campos, uno es un registro de fecha con tres campos, y otro es un registro de hora con dos campos.
    fecha: {
        dia: '01',
        mes: '08',
        año: '2020'
    },
    hora: {
        h: '04',
        m: '08'
    }
};

function showDateTime(objectDate){
    console.log(
        objectDate.fecha.dia + '/' + objectDate.fecha.mes + '/' + objectDate.fecha.año + ' ' + objectDate.hora.h + ':' + objectDate.hora.m
    )
};

showDateTime(Date);