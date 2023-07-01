
/*function for playing sounds with the buttonNmae as parameter*/
function soundPlay(btnName) {
  switch (btnName) {
    case "w":
      var crash = new Audio('crash.mp3');
      crash.play();

      break;
    case "a":
      var kick = new Audio('kick-bass.mp3');
      kick.play();

      break;
    case "s":
      var snare = new Audio('snare.mp3');
      snare.play();

      break;
    case "d":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();

      break;
    case "j":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();

      break;
    case "k":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();

      break;
    case "l":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();

      break;
    default:
      console.log(buttonNumber);

  }
}

/*function for adding animation styles applied in pressed class in css*/
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

/*getting the button name so that sound can be added accordingly*/
var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonName = this.innerHTML;
    soundPlay(buttonName);
    buttonAnimation(buttonName);
  });

}

/*getting the key which is to pressed for sounds*/
document.addEventListener("keypress", function(event) {
  soundPlay(event.key);
  buttonAnimation(event.key);
});


/*var audio=new Audio('sounds/tom-1.mp3');
  audio.play();*/
