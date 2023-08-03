export function add( x , y ){
    return x + y
};

export function substract( x , y ){
    return x - y
};

export function multiply( x , y ){
    return x * y
};

export function divide( x , y ){
    return x / y
};


export class Math {
    double(x){
        return x * x
    };
};

//para exportar por default lo que está en un módulo:
export default {
    add,
    substract,
    multiply,
    divide,
    Math
}
