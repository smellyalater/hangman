$(document).ready(function() {

  var hangmanAnswer = ['f', 'o', 'x'];
  var hangmanGuesses = [];

  // while hangmanAnswer.length !== hangmanGuesses.length, keep playing the game.
while (hangmanAnswer.length !== hangmanGuesses.length) {
    // var answer = prompt('give me a letter');
      if ($.inArray(answer, hangmanAnswer) != -1) {
        console.log(hangmanGuesses);
        answer = prompt('Oof...try again.  Give me a letter');
      } else {
        answer = prompt('Good guess! \nThat letter was in the word.     Now give me another letter');
      }
    }





    // Check if guess is in the hangmanAnswer array
      // If it is, add it to the hangmanGuesses array
      // If it is not, guess again











  // var likeToPlay = confirm("Would you like to play hangman?");
  //   if (likeToPlay === null) {
  //     alert('thanks anyway, have a nice day');
  // }



// function guessLetter() {
//   for (i = 0; i < hangmanAnswer.length + 1; i++) {
//     var answer = prompt('give me a letter');
// }
// guessLetter();

  // alert('You\'ll have 6 chances to guess the word.  Enter a single letter as a guess.  If you get it wrong, you\'ll die a fake death');

  // var answer = prompt('give me a letter');
  // function guessLetter() {

  // for (i = 0; i < 6; i++) {}

// function guessLetter() {
  // while ($.inArray(answer, hangmanAnswer) != -1) {
  //   console.log(hangmanGuesses);
  //   answer = prompt('Oof...try again.  Give me a letter');
  // }
// }




// answer = prompt('Good guess! \nThat letter was in the word.     Now give me another letter');

//   if (hangmanAnswer.length === hangmanGuesses.length) {
// alert("you win!!")
// }


    //
    //
    //
    //   console.log(answer + " is in array");
    //   hangmanGuesses.push(answer);
    //   console.log(hangmanGuesses);
    //
    //
    //
    //
    //
    //
    //   //http://stackoverflow.com/a/18867652
    // } else {
    //   answer = prompt('Oof...try again.  Give me a letter');
    // }
});
