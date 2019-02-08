var score = 0;
document.getElementById('scoreboard').innerHTML = "Score:" + score;
var timer = 12;
document.getElementById('countdown').innerHTML = "Timer:" + timer;

document.getElementById('Start').addEventListener('click', function(){
  setInterval(function() {
    if (timer != 0) {
      timer-- ;
      document.getElementById('countdown').innerHTML = "Timer:" + timer;
    }else {
      document.location = "Gameover.html"
    }
  }, 1000);

   function randomSquareGen(x) {
    var random_no = [];

    for (var i = 0; i < x; i++) {
      random_no[i] = Math.floor(Math.random() * 36)+1;
    };
    return random_no;
    };

    var random_no = randomSquareGen(4);
    console.log(random_no);

    for (var i = 0; i < random_no.length; i++) {
      $("#"+ random_no[i]).addClass("squareColour")
    };

    setTimeout(function (){
    $('div').addClass("clearBlock");}, 4000)

    for (var i = 0; i < random_no.length; i++) {
      document.getElementById(''+random_no[i]).addEventListener('click',
    function () {
      $(this).css('background-color', '#000000');
      score = score + 10;
      document.getElementById('scoreboard').innerHTML= "score:" + score;

    })
    }
    document.getElementById("done").addEventListener("click", function(){
    document.location = "level2.html"
    });
 });
