function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function division(num1,num2){
    return num1 / num2;
}

function calculator(a,b, operator){
    if(operator===add){
        const sum= add(a,b);
        return sum;
    }else if(operator===subtract){
        const sub = subtract(a,b);
        return sub;
    }else if(operator===multiply){
        const mul = multiply(a,b);
        return mul;
    }else if(operator===division){
        const div = division(a,b);
        return div;
    }else{
       return "Only addition, subtraction, multiplication and divdision allowed";
    }
}
const result = calculator(10,5, multiply);
console.log(result);