function oddNumber(num){
    if(num % 2===1){
        return true;
    }else{
        return false;
    }
}
console.log(oddNumber(10));
console.log(oddNumber(9));


// *******************
function evenNumber(numbers){
    if(numbers%2===0){
        return true;
    }else{
        return false;
    }
}
let connum = evenNumber(30);
console.log("This is the Even Number Condition : " + connum);


// **********************

function checkkor(number, doubble){
    if(doubble === true){
        const result = number *2;
        return result;
    }else{
        const result = number * 0;
        return result;
    }
}
console.log(checkkor(5,false));