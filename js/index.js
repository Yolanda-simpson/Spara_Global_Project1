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



    setTimeout(function(){
      $("#"+r1).addClass("clearBlock");
      $("#"+r2).addClass("clearBlock");
      $("#"+r3).addClass("clearBlock");

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
random1();
random2();
random3();

// if () {
//
// } else {
//
// }









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
