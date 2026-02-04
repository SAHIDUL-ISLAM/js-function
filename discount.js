/***
 * discount related problem
 * quantity 1-100=100
 * 101-200 = 90
 * above 200 = 70
 *  */

function discount(quantity){
    if(quantity<=100){
        console.log("You have no Discount");
        let needToPay = quantity*100;
        return needToPay;
    }else if(quantity<=200){
        needToPay = quantity * 90;
        return needToPay;
    }else{
        needToPay = quantity * 70;
        return needToPay;
    }
}
const qty = 201;
const result = discount(qty);
console.log(result);