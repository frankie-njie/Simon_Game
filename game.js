let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[nextSequence()];
let gamePattern = [randomChosenColour];


function nextSequence(){
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}
