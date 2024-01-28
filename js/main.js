let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () =>
  (computerChoice = Math.floor(Math.random() * (4 - 1) + 1));

let playerSelection = () =>
  (playerChoice = prompt(
    "What's your move? (Rock, Paper, Scissors)"
  ).toLowerCase());

let playRound = (computer, player) => {
  let computerChoice = computer();
  let playerChoice = player();
  console.log(`Player chose: ${playerChoice}!`);

  // convert computer choice integers to readable moves
  computerChoice = 1;
  switch (computerChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      break;
  }

  console.log(`Computer chose: ${computerChoice}!`);

  // check if computer and user entered the same thing
  if (
    (computerChoice === "scissors" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "paper") ||
    (computerChoice === "rock" && playerChoice === "rock")
  ) {
    console.log("You tied! Play again!");
    computerChoice = null;
    playerChoice = null;
    playRound(computer, player);
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "rock")
  ) {
    playerScore++;
    console.log("Player wins!");
  } else {
    computerScore++;
    console.log("Computer wins!");
  }
};

let game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(
      `Round ${i + 1} - Player: ${playerScore} Computer: ${computerScore}`
    );
    playRound(getComputerChoice, playerSelection);
  }
};

game();

if (playerScore > computerScore) console.log("Player won the tournament!");
else if (computerScore > playerScore)
  console.log("Computer won the tournament");
else console.log("It's a tie! The tournament ended in a draw!");


console.log(`Player: ${playerScore} Computer: ${computerScore}`);