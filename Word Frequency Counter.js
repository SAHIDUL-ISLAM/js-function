/**
 * Problem 1: Word Frequency Counter
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences


Ignore extra spaces


Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

Test case 2
Input:  " Hello hello HELLO "
Output: { hello: 3 }
 */

function wordFrequency(sentence){
    const word = sentence.split(" ");
    let frequency = {};
    console.log(word)
    for(const words of word){
        const lowercase = words.toLowerCase();
        if(frequency.hasOwnProperty(lowercase)){
            frequency[lowercase]++;
        }else{
            frequency[lowercase] =1;
        }
    }
    return frequency
}
const str = "I love JS and I love coding and JS is fun";
const result = wordFrequency(str);
console.log(result);