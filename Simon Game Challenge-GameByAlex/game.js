//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = -1;
var userChosenColour;
var number = 0;
var started = "false";

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  
  if (started == "true"){
    currentLevel++;
    $("h1").text("Level "+(currentLevel+1))
    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);
  
    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
  
    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    number = 0;
    userClickedPattern = []; 
   
    
    setTimeout(function() {
      animateButton(randomChosenColour);
      playSound(randomChosenColour);
    }, 1000);
  
  }

  


}

$("#red").click(function(){

  userChosenColour= "red"
  console.log(userChosenColour)
  animateButton(userChosenColour);
  playSound(userChosenColour);
  
  userClickedPattern.push(userChosenColour);
  checkAnswer(currentLevel)
  
});

$("#green").click(function(){
 
  userChosenColour= "green"
  console.log(userChosenColour)
  animateButton(userChosenColour);
  playSound(userChosenColour);
  
  userClickedPattern.push(userChosenColour);
  checkAnswer(currentLevel)
});
$("#blue").click(function(){
  
  userChosenColour= "blue"
  console.log(userChosenColour)
  animateButton(userChosenColour);
  playSound(userChosenColour);
  
  userClickedPattern.push(userChosenColour);
  checkAnswer(currentLevel)
});
$("#yellow").click(function(){
 
  userChosenColour= "yellow"
  console.log(userChosenColour)
  animateButton(userChosenColour);
  
  playSound(userChosenColour);
  
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern)
  console.log("Diese Nummer ist: "+number)
  
  checkAnswer(currentLevel)
});






function playSound(randomChosenColour){
  var audio = new Audio("./sounds/"+randomChosenColour+".mp3");
audio.play();
}

function animateButton(randomChosenColour){
  $("."+randomChosenColour).addClass("pressed");
  setTimeout(function() {
    $("."+randomChosenColour).removeClass("pressed");
  }, 150);
}

function checkAnswer(currentLevel){
  
  console.log(currentLevel)
    console.log(userClickedPattern)
    console.log(gamePattern)
    
    console.log("This is the number: "+number)
    if (userClickedPattern[number] === gamePattern[number]){
      number++;
      
  
    }
    else{
      console.log("wrong")
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 150);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
        

    }
    

     
      
      if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log(currentLevel)
        console.log("sucess")
        console.log("Die letzte Zahl erreicht")
       
        nextSequence();
      }
 
    }


    function startOver(){
      currentLevel = -1;
      gamePattern = [];
      started = "false";
    }

    $("body").keypress(function(){
      startOver();
      $("h1").text("Level 1")
      started = "true";
      nextSequence();
      
    })

    


    