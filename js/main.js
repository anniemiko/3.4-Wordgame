

var threeLetterWords = commonWords.filter(function(item){
  return item.length > 3;
})

// console.log(threeLetterWords);
// console.log(threeLetterWords.length);
function getRandomWord(){
  var randomWord = threeLetterWords[Math.floor(Math.random()*46)];
  return randomWord.split('');
}

// var pickALetter = function(){
//   var randomWord = threeLetterWords[Math.floor(Math.random()*46)];
//   return randomWord;
// }
// // console.log(pickALetter());
// // console.log(pickALetter());
//
// function splitWord(pickALetter, separator){
//  var wordString = pickALetter.split('');
//  console.log(wordString);
//  }
var currentWord = getRandomWord();
console.log(currentWord);
////

var button = document.querySelector('button');
var form = document.querySelector("form");
var turns = document.querySelector('turns');


var word = document.querySelector('.word');

/////////

 var wordHTML = currentWord.map(function(letters, index){
   return '<span id="letter' + index + '">_</span>';
})
word.innerHTML = wordHTML.join(' ');

////////
form.addEventListener('submit', userGuess);

function userGuess(event){
  event.preventDefault();

  // function letterGuess(){
    var letter = document.querySelector('input');
    console.log(letter.value);
  // }
    if currentWord.includes(letter.value){
      var letterIndex = currentWord.findIndex(letter.value);
      
    }

  function turnDecrement(){
    var turnsLeft = turns - 1;
    return turnsLeft;
  }
}
