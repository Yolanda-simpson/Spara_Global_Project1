var level = 0;

// var gridArray =
// [
//  [0,0,0,0,0],
//  [0,0,0,0,0],
//  [0,0,0,0,0],
//  [0,0,0,0,0],
//  [0,0,0,0,0]
// ];


// var blockColour = document.getElementById('game-block1');
// for (var i = 0; i < blockColour.length; i++) {
//   console.log("works");
//
//   }

var blockColour = document.getElementById("game-squares");


blockColour.addEventListener("click", squares);
//blockColour.addEventListener("click", someOtherFunction);

var r1 = Math.floor(Math.random() * 37);
var r2 = Math.floor(Math.random() * 37);
var r3 = Math.floor(Math.random() * 37);
function squares (event){
      $("#1").addClass("squareColour");
      $("#2").addClass("squareColour");
      $("#3").addClass("squareColour");

    }


























// function makeGrid() {
//     for (var y = 0; y <5; y++) {
//     for (var  x= 0; x <5; x++) {
//             $("#gamebody").append("<div class='tiles'></div>");
//         }
//     }
// };
//
// makeGrid();
//
//var blockColour = Math.random();
//     if (blockColour = 1)
//   }



// var compChoice = Math.random();
//   if (compChoice < 0.35) {
// 	alert(compChoice = "the computer chose rock");
// } else if(compChoice <= 0.68) {
// 	alert(compChoice = "the computer chose paper");
//   } else {
// 	alert(compChoice = "the computer chose scissors");
//   }
