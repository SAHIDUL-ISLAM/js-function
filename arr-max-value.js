// const arr = [50,22,36,45,98,67,84,12,39,100];

// function arrNumbers(numbers){
//     let num = numbers[0];
//     for(const arrays of numbers){
//         if(arrays>num){
//             num = arrays;
//         }
//     }
//     return num;
// }
// const array = arrNumbers(arr);
// console.log(array);



const numbers = [15,85,4,15,17,88,25,36,19,82,48,24,6,99];

function maxArrayNumbers(numbers){
    let num = numbers[0];
    for(const array of numbers){
        if(array>num){
            num = array;
        }
    }
    return num;
}
const result = maxArrayNumbers(numbers);
console.log(result);

