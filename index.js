// setup
let firstWord = prompt("First word");
let secondWord = prompt("Second Word");
// fixes maybe sentences to single words
firstWord = firstWord.toLowerCase();
secondWord = secondWord.toLowerCase();
// firstWord = firstWord.split(" ").join("");
// secondWord = secondWord.split(" ").join("");

let len1 = firstWord.length;
let len2 = secondWord.length;
let totalLength = len1 + len2;

let len1fraction = len1/totalLength;
let len2fraction = len2/totalLength;

let firstWordIndex = Math.round(Math.round(len1fraction*100)/100 * firstWord.length) - 1;
let secondWordIndex = Math.round(Math.round(len2fraction*100)/100 * secondWord.length) - 1;

let newWord = firstWord.slice(0, firstWordIndex) + secondWord.slice(secondWordIndex);
console.log(firstWord + secondWord);

console.log(firstWordIndex); 
console.log(secondWordIndex); 

console.log(newWord);

$("#combined-word").html(newWord);




