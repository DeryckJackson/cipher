const readline = require('readline')
console.log("Please enter a sentence: \n")
let userInput = readline();

const capitalizeLetters = function (str) {
  const char1 = str[0].toUpperCase();
  const char2 = str[str.length - 1].toUpperCase();
  return char1 + char2
}


const reverseLetters = function(str) {
  const char1 = str[0];
  const char2 = str[str.length - 1];
  return char2 + char1
}

const letters = function(str) {
  let funcCall1 = capitalizeLetters(str);
  let funcCall2 = reverseLetters(funcCall1);
  return funcCall2
}

const countLetters = function(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }

  let selectMiddleChar = str[Math.Floor(count)];

  return selectMiddleChar
}

// I am a sentence ---> sI am a sentenceEI
const reversedLetters = letters(userInput);
const middleLetter = countLetters(userInput);
const newUserStr = middleLetter + userInput + reversedLetters;

console.log(newUserStr);