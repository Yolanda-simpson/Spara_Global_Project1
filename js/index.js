var level = 0;
var score = 0;
var userChoice = [];





// var blockColour = document.getElementById('game-squares');
// for (var i = 0; i < blockColour.length; i++) {
//   console.log("works");
//
//   }
//
// var blockColour = document.getElementById("game-squares");
//
//
// blockColour.addEventListener("click", squares);
//blockColour.addEventListener("click", someOtherFunction);


function squares (event){
      $("#"+r1).addClass("squareColour");
      $("#"+r2).addClass("squareColour");
      $("#"+r3).addClass("squareColour");

    }


    var r1 = Math.floor(Math.random() * 36)+1;
    var r2 = Math.floor(Math.random() * 36)+1;
    var r3 = Math.floor(Math.random() * 36)+1;

    // for (var i = 0; i < array.length; i++) {
    //   array[i]
    // }

    // var storeRandomSquare = (this);

    // function clearSquare() {
    //   t =setTimeout(color, 3000);
    //
    // }

    setTimeout(function(){
      $("#"+r1).addClass("clearBlock");
      $("#"+r2).addClass("clearBlock");
      $("#"+r3).addClass("clearBlock");
      // $('#'+r1).remove();
      // $('#'+r2).remove();
      // $('#'+r3).remove();
    }, 4000);

//clicking square blocks
$(function () {
    $("#"+r1).click(function () {
        $(this).css('background-color', '#000000');
    });
});
$(function () {
    $("#"+r2).click(function () {
        $(this).css('background-color', '#000000');
    });
});
$(function () {
    $("#"+r3).click(function () {
        $(this).css('background-color', '#000000');
    });
});



// var clickBox = document.querySelectorAll('.squareColour')
// for (var i = 0; i < clickBox.length; i++) {
//   clickBox[i].addEventListener('click',function (event) {
//     console.log(this.value + 'was clicked ');
// })
// };
// var clickBlock = document.getElementById('r1');
//
//
// clickBlock.onclick = function() {
//   this.style.backgroundColor = 'black';
// };
// clickBlock.onmouseover = function() {
//     this.style.backgroundColor = 'red';
//   }

 // document.getElementById(r1).addEventListener("click", function(event) {
 //   // var clickBlock = document.getElementById(r1);
 //   //  clickBlock.classList.add("squareColour");
 //     console.log(event.target);
 //     $('game-block').click(function(){
 //       $(r1).addClass("squareColour")
 //     })
 // });

 // function userClicks (){
 //
 //   document.getElementById('1').addClass("squareColour");
 //   console.log('works');
 // var blockColour = document.getElementById("game-squares");
 //
 //
 // blockColour.addEventListener("click", squares);
 //   document.addEventListener("click", function(){
 //     document.getElementById("#").appendChild(".squareColour");
 //   });


// var blockColour = $("#"+r1).addClass("squareColour");
// blockColour.addEventListener("click", squares);
// for (var i = 0; i < game-squares.length; i++) {
//    console.log("works");
//
// }
// }





// $(".squareColour").mousedown(function(){
//         if (playersTurn) {
//             var gameBlockID = '#'+r1 + this.id;
//             var highlightColor = $(this).css('squareColour');
// $("1").addClass("squareColour");
//
// }
//
// });











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
