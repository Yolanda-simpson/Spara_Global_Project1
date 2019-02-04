console.log("works");
//var makeGrid =
// [
// [0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0]];



// function drawTiles() {
//   for (var i = 0; i < makeGrid.length; i++) {
//     var tile = document.createElement('div');
//     tile.classList.add("tile")
//     gamebody.appendChild.innerHTML()= getElementsByClassName('tile');
//   }
//
// }
function makeGrid() {
    for (var rows = 0; rows <=5; rows++) {
        for (var columns = 0; columns < 6; columns++) {
            $("#gamebody").append("<div class='grid'></div>");
        }
    }
};
