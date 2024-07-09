const input = require("readline-sync");
let newPointStructure = {};
let word = "not updated";

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

function transform(oldPointStructure) {
   let newObject = {};
   for (item in oldPointStructure) {
      for (let i = 0; i < oldPointStructure[item].length; i++) {
 newObject[oldPointStructure[item][i].toString().toLowerCase()] = Number(item);
      }
};
return newObject;
}

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word:");
   
   return word;
};

let simpleScorer = function(word){
   let simplePoints = 0;
   simplePoints = word.length;
   return simplePoints;
};

let vowelBonusScorer = function(word){
   word = word.toUpperCase();
      let vowelPoints = 0;
      let vowels = [ 'A', 'E', 'U', 'I', 'O'
      ];
      let consonants = ['Q', 'Z', 'W', 'S', 'C', 'R', 'F', 'V', 'T',
      'G', 'B', 'Y', 'H', 'N', 'J', 'M', 'K', 'L', 'P'
      ];
      for (let i = 0; i < word.length; i++) {
         if (vowels.includes(word[i])) {
            vowelPoints = vowelPoints + 3
         };
         if (consonants.includes(word[i])) {
            vowelPoints++
         };
      };
   return vowelPoints;
};

   let scrabbleScorer = function(word){
      let scrabblePoints = 0;
      word = word.toLowerCase()
      for (let i = 0; i < word.length; i++) {
         scrabblePoints = scrabblePoints + newPointStructure[word[i]];
      }
      return scrabblePoints
   }   

   let simple = {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scorerFunction: simpleScorer,
      };
   
      let vowel = {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 pts, consonants are 1 pt.',
      scorerFunction: vowelBonusScorer,
      };
   
      let scrabble = {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scorerFunction: scrabbleScorer,
      };
   
      let scoringAlgorithms = [simple, vowel, scrabble];

function scorerPrompt() {
   game = input.question(' press 0 1 2 : ')

   return game
}

newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
   console.log(scoringAlgorithms[game].scorerFunction(word));
}

module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};