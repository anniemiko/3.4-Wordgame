(function(){
  "use strict";

// filter out words shorter than three letters:
var threeLetterWords = commonWords.filter(function(item){
  return item.length > 3;
})
// console.log(threeLetterWords);
// console.log(threeLetterWords.length);

// select random word from word list:
function getRandomWord(){
  var randomWord = threeLetterWords[Math.floor(Math.random()*46)];
  return randomWord.split('');
}

var currentWord = getRandomWord();
console.log(currentWord);
////

// setting variables
var button = document.querySelector('button');
var form = document.querySelector('form');
var turns = currentWord.length + 4;
var word = document.querySelector('.word');

var foundIndexes = [];

/////////
// setting dashes to show length of word:

 var wordHTML = currentWord.map(function(letters, index){
   return '<span id="letter' + index + '">_</span>';
  })
word.innerHTML = wordHTML.join(' ');

// setting guess and turns left text
var turnsText = document.querySelector('.turnsLeft').innerHTML = '<span id="turns">You have ' + turns + ' turns left</span>';
////////

// event listener to let user submit letter guess
form.addEventListener('submit', userGuess);

function userGuess(event){
  event.preventDefault();
  // above to prevent entire page from reloading when function runs

  var letter = document.querySelector('input');
  console.log(letter.value);

// check user guess against current word - not working.
  currentWord.forEach(function(letter, index){
    if (letter == letter.value){
      foundIndexes.push(index);
      turnsText.innerHTML = '<span id="turns">Good guess! You have' + turns-1 + 'left.</span>';

// also trying to change turns text, not working.
    } else
    (!foundIndexes.length)
    return turnsText = '<span id="turns">Try again! You have' + turns-1 + 'left.</span>';
  });
// update word display after user guess, not working
  function updateWord(indexes){
    indexes.forEach(function(foundIndexes){
      document.querySelector('#letter' + foundIndexes).textContent = currentWord[foundIndexes];
      return updateWord();
  });
}

}

}());
