//the word is fox

var word = ['f', 'o', 'x']
var correctGuesses = [];

// get user input as a letter

//test if the letter is in the word fox
function checkGuess(guessedLetter) {
  //for each letter in 'word'
  for (i = 0; i < word.length; i++) {
    //if 'guessedLetter' is in 'word': consle.log('yup');
    if (word[i] === guessedLetter ) {
      correctGuesses.push(guessedLetter);
    } 
  }
}

while (correctGuesses.length !== word.length) {
  var userGuess = prompt("give me a letter");
  checkGuess(userGuess);
}
//
// console.log(correctGuesses);
// checkGuess('a');
// console.log(correctGuesses);
// checkGuess('f');
// console.log(correctGuesses);

// keep getting user input until they guess all the letters F O X
