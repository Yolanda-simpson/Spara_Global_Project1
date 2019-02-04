console.log("works");
var gridArray =
[
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0]
];


function makeGrid() {
    for (var y = 0; y <=5; y++) {
    for (var  x= 0; x <=6; x++) {
            $("#gamebody").append("<div class='tiles'></div>");
        }
    }
};

makeGrid();
