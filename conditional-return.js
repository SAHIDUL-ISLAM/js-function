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