//13 El índice de masa corporal (IMC) se calcula de la siguiente manera: bmi = peso en Kg / (altura x altura) en m2. Escribe una función que calcule bmi. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso inferior al normal, normal, con sobrepeso u obeso según la información que se proporciona a continuación.

// Los mismos grupos se aplican tanto a hombres como a mujeres.
// Bajo peso: el IMC es inferior a 18,5
// Peso normal: el IMC es de 18,5 a 24,9
// Sobrepeso: el IMC es de 25 a 29,9
// Obeso: IMC es 30 o más



function bmi(peso, altura){ //una función que calcula el bmi
    return (peso / (altura * altura));
}


function imc (bmi){ //Una función que nos devuelve el imc
    if (bmi < 18.5){
        console.log('Bajo peso')
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        console.log('Peso normal')
    }
    else if (bmi >= 25 && bmi <= 29.9){
        console.log('Sobrepeso')
    }
    else {
        console.log('Obeso')
    }
}



imc(bmi(55, 1.80));   //calculo el imc