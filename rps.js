let rock = 0;
let paper = 1;
let scissors = 2;
const computerMaxChoice = 3;
let myScore = 0;
let computerScore = 0;
let myScoreEle = document.getElementById("myScore");
let computerScoreEle = document.getElementById("computerScore");

function updateScore(){
  myScoreEle.textContent="Your Score: " + myScore;
  computerScoreEle.textContent="Computer Score: " + computerScore;
}

let getComputerFunction = function(computerMaxChoice){
  let computerChoice = Math.floor(Math.random() * computerMaxChoice);
  return computerChoice;
}

let playGame = function(){
    document.getElementById("gameTitle").style.display = "none";
    document.getElementById("playButton").style.display = "none";
    document.getElementById("gameButtons").style.display = "flex";
    document.getElementById("replayButton").style.display = "none";
    document.getElementById("banner").style.display="none";
    document.getElementById("quitGame").style.display="none";
}
let playRock = function(){
  let play = "rock";
  computerPlay = getComputerFunction(computerMaxChoice);
  document.getElementById("gameButtons").style.display = "none";
  let banner = document.getElementById("banner");
  let rePlay = document.getElementById("replayButton");
  document.getElementById("quitGame").style.display="block";
  banner.style.display = "block";
  rePlay.style.display = "block";
  if(play === "rock" && computerPlay === 0){  
    banner.style.backgroundColor = "lightblue";
    banner.innerText = "You have tied!"; 
  }else if(play === "rock" && computerPlay === 1){
    banner.style.backgroundColor="red";
    banner.innerText = "You have lost!";
    computerScore++;
  }else if(play === "rock" && computerPlay === 2){
    banner.style.backgroundColor = "green";
    banner.innerText = "You Won!!!";
    myScore++;
  }
  updateScore();
}
  let playPaper = function(){
    let play = "paper";
    computerPlay = getComputerFunction(computerMaxChoice);
    document.getElementById("gameButtons").style.display = "none";
    let banner = document.getElementById("banner");
    let rePlay = document.getElementById("replayButton");
    banner.style.display = "block";
    rePlay.style.display = "block";
    document.getElementById("quitGame").style.display="block";
    if(play === "paper" && computerPlay === 1){  
      banner.style.backgroundColor = "lightblue";
      banner.innerText = "You have tied!"; 
    }else if(play === "paper" && computerPlay === 2){
      banner.style.backgroundColor="red";
      banner.innerText = "You have lost!";
      computerScore++;
    }else if(play === "paper" && computerPlay === 0){
      banner.style.backgroundColor = "green";
      banner.innerText = "You Won!!!";
      myScore++;
    }
    updateScore();
  }
    let playScissors = function(){
      let play = "scissors";
      computerPlay = getComputerFunction(computerMaxChoice);
      document.getElementById("gameButtons").style.display = "none";
      let banner = document.getElementById("banner");
      let rePlay = document.getElementById("replayButton");
      banner.style.display = "block";
      rePlay.style.display = "block";
      document.getElementById("quitGame").style.display="block";
      if(play === "scissors" && computerPlay === 2){  
        banner.style.backgroundColor = "lightblue";
        banner.innerText = "You have tied!"; 
      }else if(play === "scissors" && computerPlay === 0){
        banner.style.backgroundColor="red";
        banner.innerText = "You have lost!";
        computerScore++;
      }else if(play === "scissors" && computerPlay === 1){
        banner.style.backgroundColor = "green";
        banner.innerText = "You Won!!!";
        myScore++;
      }
      updateScore();
}
