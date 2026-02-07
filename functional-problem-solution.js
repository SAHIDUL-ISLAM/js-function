/**
 * New Price for Eid Sale
 */
/*function signature/sample */
// function newPrice(currentPrice , discount ) {
//     if(typeof currentPrice!=='number'|| typeof discount!=='number'){
//         return "Invalid";
//     }else if(discount>100 || discount<0){
//         return "Invalid";
//     }
//     const discountPrice = currentPrice*(discount/100);
//     const newPrice = currentPrice - discountPrice;
//     return newPrice.toFixed(3);
// }
// const price = newPrice(1500,20);
// console.log(price)




/**
 * OTP Validation for Zapshift
 */
/*function signature/sample */
function validOtp(otp) {
    if(typeof otp !== 'string'){
        return "Invalid";
    }else if(otp.length==8 && otp.startsWith("ph-")){
        return true;
    }else{
        return false;
    }

}
const get = validOtp("ph-15243");
console.log(get);


