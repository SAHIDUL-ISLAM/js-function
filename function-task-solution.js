// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// function Multiply(num1,num2,num3,num4){
//     let multiplication = num1*num2*num3*num4;
//     return multiplication;
// }
// const number = Multiply(2,2,2,2);
// console.log(number);


// *****************
// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


// function evenOrOdd(number){
//     if(number%2===1){
//         let num =number * 2;
//         return num;
//     }else{
//         let num = number/2;
//         return num;
//     }
// }
// const theNumber = evenOrOdd(21);
// console.log("The Number is : " + theNumber);


// *****************
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(arr){
//     let storarr = 0;
//     for(let arrayav of arr){
//         storarr = arrayav + storarr;
//     }
//     let average = storarr / arr.length;
//     return average;
// }
// const arrvalue= make_avg([10,20,30,40]);
// console.log(arrvalue);


// *****************
// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


// function count_zero(binaryNumber){
//     let count = 0;
//     for(let counter of binaryNumber){
//         if(counter==="0"){
//             count++;
//         }
//     }
//     return count;
// }
// const binary = count_zero("00011100110");
// console.log(binary);







// *****************
// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(values){
    if(values%2==0){
        return "Even";
    }
        return "Odd";
}
let numbers = odd_even(5);
console.log(numbers);





