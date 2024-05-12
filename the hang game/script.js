

    //the hangman game;

    let words = ['eye', 'nose', 'lips', 'hand', 'leg', 'finger', 'thumb', 'head', 'forhead', 'foot', 'teeth', 'arm'];

    let word = words[Math.floor(Math.random() * words.length)];

    alert('A body part');


    let answerArray = [];

    for (let i = 0; i < word.length; i++) {
      answerArray[i] = '_';
    }

    let remainingLetters = word.length;

    while (remainingLetters > 0) {


      alert(answerArray.join(' '));

      let guess = prompt('enter a single letter');

      if (guess == null) {
        alert('you quit the game')
        break;
      } else if (guess.length !== 1) {
        alert('please enter a single character');
      } else {
        for (let j = 0; j < word.length; j++) {
          if (word[j] == guess) {
            if (answerArray[j] == '_') {
              answerArray[j] = guess;
              remainingLetters--
            } else if (answerArray[j] !== '_') {
              alert('this has already been guessed')
              break;
            }
          }
        }
      }
    }

    if (remainingLetters == 0) {
      alert(answerArray.join(' '));
      alert('Good job! The answer was ("' + word + '")');
    }
