//14 Escribe una función llamada checkSeason, toma un parámetro de mes y devuelve la estación: Otoño, Invierno, Primavera o Verano.

function checkSeason (mes){
    if ((mes == 12) || (mes == 1) || (mes == 2)){
        console.log('Verano');
    }
    else if ((mes == 3) || (mes == 4) || (mes == 5)){
        console.log('Otoño');
    }
    else if ((mes == 6) || (mes == 7) || (mes == 8)){
        console.log('Invierno')
    }
    else if ((mes == 9) || (mes == 10) || (mes == 11)){
        console.log('Primavera')
    }
};

checkSeason(1);