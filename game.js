let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence(){

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //return randomNumber;

  // Selecting the buttons with the same Id and playing sound when the animation is done
 $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  let audio = new Audio ("sounds/" +randomChosenColour + ".mp3");
  // audio.muted = true;
  audio.play();
}
