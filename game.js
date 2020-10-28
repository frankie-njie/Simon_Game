let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[nextSequence()];
let gamePattern = [];
gamePattern.push(randomChosenColour);


function nextSequence(){
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

$('#'+randomChosenColour).fadeOut(200).fadeIn(200);
let audio = new Audio ("sounds/" +randomChosenColour + ".mp3");
// $('audio').play();
