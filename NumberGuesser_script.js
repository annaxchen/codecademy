let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  secretTarget = Math.floor(Math.random()*10);
  return secretTarget;
}

humanGuess = generateTarget();
secretTarget = generateTarget();
computerGuess = generateTarget();
console.log(`The human guess is ${humanGuess}`)
console.log(`The computer guess is ${computerGuess}`)

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  humanGuessDifference = Math.abs(humanGuess - secretTarget);
  computerGuessDifference = Math.abs(computerGuess - secretTarget);
  console.log(humanGuessDifference);
  console.log(computerGuessDifference);
  if (humanGuessDifference <= computerGuessDifference) {return true};
  if (humanGuessDifference > computerGuessDifference) {
    console.log(`the computer guess is closer`);
    return false};
   
  

};


console.log(compareGuesses(humanGuess, computerGuess, 5))

const updateScore = (string) => {
  humanScore = 0
  computerScore = 0
  if (compareGuesses() === true) {humanScore++}
  if (compareGuesses() === false) {computerScore++}
}

const advancedRound = () => {
  currentRoundNumber++;
  return currentRoundNumber;
}

console.log(advancedRound())
console.log(advancedRound())
