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
      $("#"+r4).addClass("squareColour");
      $("#"+r5).addClass("squareColour");
    }
setTimeout(squares, 1000);

    var r1 = Math.floor(Math.random() * 36)+1;
    var r2 = Math.floor(Math.random() * 36)+1;
    var r3 = Math.floor(Math.random() * 36)+1;
    var r4 = Math.floor(Math.random() * 36)+1;
    var r5 = Math.floor(Math.random() * 36)+1;


    setTimeout(function(){
      $("#"+r1).addClass("clearBlock");
      $("#"+r2).addClass("clearBlock");
      $("#"+r3).addClass("clearBlock");
      $("#"+r4).addClass("clearBlock");
      $("#"+r5).addClass("clearBlock");
    }, 4000);

//clicking square blocks
function random1() {
    $("#"+r1).click(function () {
        $(this).css('background-color', '#000000');
    });
}
function random2() {
    $("#"+r2).click(function () {
        $(this).css('background-color', '#000000');
    });
}
function random3() {
    $("#"+r3).click(function () {
        $(this).css('background-color', '#000000');

    });

}
function random4() {
    $("#"+r4).click(function () {
        $(this).css('background-color', '#000000');

    });
  }
  function random5() {
      $("#"+r5).click(function () {
          $(this).css('background-color', '#000000');

      });

    }
  // random1();
  // random2();
  // random3();



function clearSquare() {
  $("#"+r1).removeClass("clearBlock");
  $("#"+r2).removeClass("clearBlock");
  $("#"+r3).removeClass("clearBlock");
  $("#"+r3).removeClass("clearBlock");
  $("#"+r3).removeClass("clearBlock");
}
// setTimeout(clearSquare, 6000)

var myTimer = 21;
setInterval(
  (function (event) {
    if (myTimer !=0) {
      random1();
      random2();
      random3();
      random4();
      random5();
      myTimer--;
    }else {
      document.location = "level2.html";
    }
  }), 1000);
