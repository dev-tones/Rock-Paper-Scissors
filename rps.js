let rock = 0;
let paper = 1;
let scissors = 2;
const computerMaxChoice = 3;

let getComputerFunction = function(computerMaxChoice){
  let computerChoice = Math.floor(Math.random() * computerMaxChoice);
  return computerChoice;
}
let play = "";
let computerPlay = 0;

let playRound = function(play, computerPlay){

  play = prompt("Please make a selection, Rock, Paper, Scissors: ");
  play = play.toLowerCase();
  computerPlay = getComputerFunction(computerMaxChoice);

  if(play === "rock" && computerPlay === 0){
    console.log("It is a tie! You both chose Rock!");
  }else if(play === "rock" && computerPlay === 1){
    console.log("You lose, Paper beats Rock!");
  }else if(play === "rock" && computerPlay === 2){
    console.log("You Win! Rock beats Scissors!");
  }else if(play === "paper" && computerPlay === 1){
    console.log("It is a tie! You both chose Paper!");
  }else if(play === "paper" && computerPlay === 2){
    console.log("You lose, Scissors beats Paper!");
  }else if(play === "paper" && computerPlay === 0){
    console.log("You win! Paper beats Rock!");
  }else if(play === "scissors" && computerPlay === 2){
    console.log("It is a tie! You both chose Scissors!");
  }else if(play === "scissors" && computerPlay === 1){
    console.log("You Win! Scissors beats Paper");
  }else if(play === "scissors" && computerPlay === 0){
    console.log("You lose, Rock beats Scissors");
  }else{
    alert("Please make a valid choice: ");
  }
}

let playGame = function(){
    document.getElementById("gameTitle").style.display = "none";
    document.getElementById("playButton").style.display = "none";
    document.getElementById("gameButtons").style.display = "flex";
}
