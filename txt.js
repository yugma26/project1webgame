const words = [
    'JAVASCRIPT',
    'HTML',
    'CSS',
    'NODE',
    'REACT',
    'ANGULAR',
    'JQUERY',
    'VUE'
  ];

  function selectRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function initializeGame() {
    wordToGuess = selectRandomWord();
    guessedLetters = Array(wordToGuess.length).fill('_');
    wrongGuesses = 0;
  
    // Update the word display
    updateWordDisplay();
  
    updateMeltingSnowmanGraphic();
  
    // Remove any previously generated buttons
    const lettersContainer = document.querySelector('.letters');
    while (lettersContainer.firstChild) {
      lettersContainer.removeChild(lettersContainer.firstChild);
    }
  
    // Generate the letter buttons
    for (let i = 0; i < 26; i++) {
      const letter = String.fromCharCode(65 + i);
      const button = document.createElement('button');
      button.innerText = letter;
      button.addEventListener('click', function () {
        handleGuess(letter);
      });
      lettersContainer.appendChild(button);
    }
  
    // Clear any previous win/lose message
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = '';
  }

  function updateWordDisplay() {
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = guessedLetters.join(' ');
  }

  function handleGuess(letter) {
    // If the letter has already been guessed, do nothing
    if (guessedLetters.includes(letter)) {
      return;
    }
  
    // Add the letter to the list of guessed letters
    guessedLetters.forEach((guessedLetter, index) => {
      if (wordToGuess[index] === letter) {
        guessedLetters[index] = letter;
      }
    });
  
    // If the letter is not in the hidden word, increment the wrong guesses count and update the Melting Snowman graphic
    if (!wordToGuess.includes(letter)) {
      wrongGuesses++;
      updateMeltingSnowmanGraphic();
    }
  
    // Update the word display
    updateWordDisplay();
  
    // Check if the game has been won or lost
    checkWinOrLose();
  }

  function updateMeltingSnowmanGraphic() {
    const meltingSnowmanContainer = document.querySelector('.MeltingSnowman');
    meltingSnowmanContainer.innerHTML = `<img src="path/MeltingSnowman${imageCount}.png" alt="MeltingSnowman ${imageCount}">`;
    imageCount++;
  }