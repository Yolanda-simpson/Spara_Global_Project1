var level = 0;
var score = 0;
var userChoice = [];

function Levels(x) {
  var random_no = [];

  for (var i = 0; i < x ; i++) {
    random_no[i] = Math.floor(Math.random() * 36)+1;
  };

  for (var i = 0; i < random_no.length; i++) {
    $("#"+ random_no[i]).addClass("squareColour")
  };


setTimeout(function () {
  $("#" + random_no[i]).addClass("clearBlock");}, 4000)

};

Levels(10);
