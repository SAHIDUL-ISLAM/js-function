
function maxNumber (num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2
    }
}
const result = maxNumber(20,46);
console.log("The Biggest number is: ", result);


// shortcut
const numbers = Math.max(10,50,60,80,43,2,65);
console.log(numbers);
