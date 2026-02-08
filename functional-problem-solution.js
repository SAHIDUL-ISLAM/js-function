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
// function validOtp(otp) {
//     if(typeof otp !== 'string'){
//         return "Invalid";
//     }else if(otp.length==8 && otp.startsWith("ph-")){
//         return true;
//     }else{
//         return false;
//     }

// }
// const get = validOtp("ph-15243");
// console.log(get);





/***
 * BCS Final Score Calculator
 */
/*function signature/sample */
// function finalScore (omr) {
//     if((omr.right + omr.wrong + omr.skip) !==100){
//         return "Invalid";
//     }
//     const totalRightScore = omr.right*1;
//     const totalWrongScore = omr.wrong*0.5;
//     const totalScore = totalRightScore-totalWrongScore;
//     const finalScore = (Math.round(totalScore));
//     return finalScore;
// }
// const obj = { right: 50, wrong: 10, skip: 40 };
// const values = finalScore(obj)
// console.log(values);




/***
 * Upcoming Gono Vote
 */

/*function signature/sample */
function gonoVote(array) {
    if(Array.isArray(array)==false){
        return "Invalid";
    }
    let haVote = 0;
    let naVote = 0;
    for(const arrays of array){
        if(arrays == "ha"){
            haVote = haVote+1;
        }else if(arrays == "na"){
            naVote = naVote +1;
        }
    }
    if(haVote>naVote){
        return true;
    }else if(haVote==naVote){
        return "equal";
    }else{
        return false;
    }
}
const arr = ["ha", "na", "ha", "na"];
const result = gonoVote(arr);
console.log(result);

