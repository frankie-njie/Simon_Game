let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

//adding a click event to the btn class
$('.btn').click(function(){

  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);
});


function nextSequence(){
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Selecting the buttons with the same Id and playing sound when the animation is done
 $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColour)
}

function animatePress(currentColour){

}

function playSound(name) {
  // Selecting the buttons with the same Id and playing sound when the animation is done
  let audio = new Audio ("sounds/" + name + ".mp3");
  audio.play();
}
