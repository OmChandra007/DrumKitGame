//Self Note.
//First Way of doing this or calling anonimus function.
// document.querySelector("button").addEventListener("click" , handleClick);
//
// function handleClick(){
//   alert("I got clicked!");
// }

// Second way off calling annonimus function.
// document.querySelector("button").addEventListener("click" , function handleClick(){
//   alert("I got clicked!");
// })

// similarly you can write 7 times this code and specify arrays from [o to 6] in order to call all buttons.

// document.querySelectorAll("button")[1].addEventListener("click" , function handleClick(){
// alert("I got clicked!");
// })  // this for second buttion

// We will use for loop in order to call all seven buttons

// this is one method to detacte button press.
//  Detacting buttion press.

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
//
//
//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);
//
//
//   });
// }

// this is another method to detact button press.  
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


//Detacting keybord press.

document.addEventListener("keypress", function(event) {
  makeSound(event.key); // this will tell us which key bord button got pressed.
  //alert("button got pressed") this code will pop up an
  buttonAnimation(event.key);
});


    // Using switch statment to assign functionality to every button that after every click will receive diffrent socnds.
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

    case "j":
      var snare = new Audio("sounds/snare.mp3")
      snare.play();

    case "k":
      var crash = new Audio("sounds/crash.mp3")
      crash.play();

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3")
      kickBass.play();

    default:console.log(key); // in case if w a s d j k l not given then this line will print the innerHTMl of pressed button.

  }

}

// adding button animation.

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");

  }, 100);
}

// self Note.
// this.style.color ="white";
// console.log(this); // this will print which button got clicked.
// console.log(this.innerHTML); // This will print inner html of clicked button.

// here you can write what function will do.
