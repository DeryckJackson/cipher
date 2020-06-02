jQuery(document).ready(function() {
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

    let selectMiddleChar = str[Math.floor(count / 2)];

    return selectMiddleChar
  }

  const reverseStr = function(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }

    return newString
  }

  jQuery(".forwards").click(function() {
    alert(userInput);
  });

  $(".backwards").click(function() {
    alert(backwardsUserStr)
  })

  let userInput = prompt("Input a sentence: ")

  const reversedLetters = letters(userInput);
  const middleLetter = countLetters(userInput);
  const newUserStr = middleLetter + userInput + reversedLetters;
  const backwardsUserStr = reverseStr(newUserStr);
});