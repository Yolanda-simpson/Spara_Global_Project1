var level = 0;
var score = 0;
var timer = 8;
var userChoice = [];

document.getElementById('start').addEventListener('click', function(){
setInterval(function() {
  if (timer != 0) {
    timer-- ;
    console.log(timer);
  }
}, 1000)});

function squares (event){
      $("#"+r1).addClass("squareColour");
      $("#"+r2).addClass("squareColour");
      $("#"+r3).addClass("squareColour");

    }


    var r1 = Math.floor(Math.random() * 36)+1;
    var r2 = Math.floor(Math.random() * 36)+1;
    var r3 = Math.floor(Math.random() * 36)+1;



    setTimeout(function(){
      $("#"+r1).addClass("clearBlock");
      $("#"+r2).addClass("clearBlock");
      $("#"+r3).addClass("clearBlock");

    }, 4000);

//clicking square blocks
function random1() {
    $("#"+r1).click(function () {
        $(this).css('background-color', '#000000');
        score = score + 10;
        console.log(score);

    });
}
function random2() {
    $("#"+r2).click(function () {
        $(this).css('background-color', '#000000');
        score = score + 10;
        console.log(score);
    });
}
function random3() {
    $("#"+r3).click(function (event) {
        $(this).css('background-color', '#000000');
        score = score + 10;
        console.log(score);
    });
};

random1();
random2();
random3();




function clearSquare() {
  $("#"+r1).removeClass("clearBlock");
  $("#"+r2).removeClass("clearBlock");
  $("#"+r3).removeClass("clearBlock");
}
// setTimeout(clearSquare, 6000)

// var myTimer = 16;
// setInterval(
//   (function (event) {
//     if (myTimer !=0) {
//       random1(),
//       random2(),
//       random3();
//       myTimer--;
//     }else {
//       document.location = "level2.html";
//     }
//   }), 1000);
