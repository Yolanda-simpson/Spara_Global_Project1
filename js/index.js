var level = 0;
var score = 0;
document.getElementById('scoreboard').innerHTML = "score:" + score;
var timer = 10;
document.getElementById('countdown').innerHTML = "timer:" + timer;

document.getElementById('start').addEventListener('click', function(){
  setInterval(function() {
    if (timer != 0) {
      timer-- ;
      document.getElementById('countdown').innerHTML = "timer:" + timer;}
  }, 1000)

  function squares(x) {
    var random_no = [];

    for (var i = 0; i < x; i++) {
      random_no[i] = Math.floor(Math.random() * 36)+1;
    };

    for (var i = 0; i < random_no.length; i++) {
      $("#"+ random_no[i]).addClass("squareColour")
    };


  setTimeout(function () {
    $("#" + random_no[i]).addClass("clearBlock");}, 4000)

};

squares(8);
 });




// function squares(x) {
//   var random_no = [];
//
//   for (var i = 0; i < x; i++) {
//     random_no[i] = Math.floor(Math.random() * 36)+1;
//   };
//
//   for (var i = 0; i < random_no.length; i++) {
//     $("#"+ random_no[i]).addClass("squareColour")
//   };
//
//
// setTimeout(function () {
//   $("#" + random_no[i]).addClass("clearBlock");}, 4000)
//
// };
//
// squares(8);

// function squares (event){
//       $("#"+r1).addClass("squareColour");
//       $("#"+r2).addClass("squareColour");
//       $("#"+r3).addClass("squareColour");
//     }
//
//
     var r1 = Math.floor(Math.random() * 36)+1;
    var r2 = Math.floor(Math.random() * 36)+1;
     var r3 = Math.floor(Math.random() * 36)+1;
//
//
//
//     setTimeout(function(){
//       $("#"+r1).addClass("clearBlock");
//       $("#"+r2).addClass("clearBlock");
//       $("#"+r3).addClass("clearBlock");
//
//     }, 4000);

//clicking square blocks
function random1() {
    $("#"+r1).click(function () {
        $(this).css('background-color', '#000000');
        score = score + 10;
        console.log(score);
        document.getElementById('scoreboard').innerHTML= "score:" + score;
    });
}
function random2() {
    $("#"+r2).click(function () {
        $(this).css('background-color', '#000000');
        score = score + 10;
        console.log(score);
        document.getElementById('scoreboard').innerHTML="score:" + score;
    });
}
function random3() {
    $("#"+r3).click(function (event) {
        $(this).css('background-color', '#000000');
        score = score + 10;
        document.getElementById('scoreboard').innerHTML= "score:" + score;
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

if (timer == 0) {
  document.location = "level2.html"
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
