/*
Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir 
dos o més operands. 
*/

const sumar = (...numbers) =>{
    let sum = 0;
    for(let i=0;i < numbers.length ;i++){
        sum += numbers[i];
    }
    return(sum);
}

const multiplicar = (...numbers) =>{
    let mult = 1;
    for(let i=0;i < numbers.length ;i++){
        mult *= numbers[i];
    }
    return(mult);
}

const restar = (...numbers) =>{
    let rest = numbers[0];
    for(let i=0;i < (numbers.length -1) ;i++){
        rest -= numbers[i+1];
    }
    return(rest);
}

const dividir = (...numbers) =>{
    let div = numbers[0];
    for(let i=0;i < (numbers.length-1) ;i++){
        div /= numbers[i+1];
    }
    return(div);
}

module.exports = {};
module.exports.sum = sumar;
module.exports.multiply = multiplicar;
module.exports.subtract = restar;
module.exports.divide = dividir;