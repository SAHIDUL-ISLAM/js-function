// function arr(array){
//     return array;
// }
// const newarr = arr([10,20,30,40]);
// console.log(newarr)


function arr(array){
    let number = 0;
    for(let arrnum of array){
        number = arrnum + number;
    }
    return number;
}
const numbers = [10,20,30,40];
const theNum = arr(numbers);
console.log("The summation of array: " + theNum);

