$(document).ready(function() {

  var hangmanAnswer = ['f', 'o', 'x'];
  var hangmanGuesses = [];


  var likeToPlay = confirm("Would you like to play hangman?");
  if (likeToPlay === null) {
    alert('thanks anyway, have a nice day');
  }


  alert('You\'ll have 6 chances to guess the word.  Enter a single letter as a guess.  If you get it wrong, you\'ll die a fake death');

  var answer = prompt('give me a letter');

  for (i = 0; i < 6; i++) {
    if ($.inArray(answer, hangmanAnswer) != -1) {
      console.log(answer + " is in array");
      hangmanGuesses.push(answer);
      console.log(hangmanGuesses);
      answer = prompt('Good guess! \nThat letter was in the word.  Now give me another letter');

      if (hangmanAnswer.length === hangmanGuesses.length) {
        alert("you win!!")
      }

      //http://stackoverflow.com/a/18867652
    } else {
      answer = prompt('Oof...try again.  Give me a letter');
    }
  }
});
