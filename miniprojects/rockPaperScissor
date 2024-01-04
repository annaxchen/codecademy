const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == "rock" || userInput === "scissors" || userInput === "paper")
    return userInput;
  else console.log("There is an error.");
};

console.log(getUserChoice("Rock"));
console.log(getUserChoice("Paper"));
console.log(getUserChoice("scissors"));

const getComputerChoice = () => {
  chosenNumber = Math.floor(Math.random() * 3);
  if (chosenNumber === 0) return "rock";
  if (chosenNumber === 1) return "paper";
  if (chosenNumber === 2) return "scissors";
};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "The game is a tie.";
  if (userChoice === "rock") {
    if (computerChoice === "paper")
      return `The computer won - ${computerChoice} vs. ${userChoice}.`;
   else {
    return `The user won - ${userChoice} vs. ${computerChoice}.`;
  }}
  if (userChoice === "paper") {
    if (computerChoice === "scissors")
      return `The computer won - ${computerChoice} vs. ${userChoice}.`;
   else {
    return `The user won - ${userChoice} vs. ${computerChoice}.`;
  }}
  if (userChoice === "scissors") {
    if (computerChoice === "rock")
      return `The computer won - ${computerChoice} vs. ${userChoice}.`;
   else {
    return `The user won - ${userChoice} vs. ${computerChoice}.`;
  }}
};

console.log(determineWinner("rock", "rock"));
console.log(determineWinner("rock", "paper"));
console.log(determineWinner("rock", "scissors"));
console.log(determineWinner("paper", "scissors"));
console.log(
  determineWinner((userChoice = "scissors"), (computerChoice = "paper"))
);

const playGame = (userChoice, computerChoice) => {
  userChoice = getUserChoice('rock');
    console.log(`The user choice is ${userChoice}.`);
  computerChoice = getComputerChoice();
    console.log(`The computer choice is ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
  
}

playGame()
