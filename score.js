// Iteration 5: Store the player score and display it on the game over screen
var total = localStorage.getItem("score");

var scoreBoard = document.getElementById("score-board")
scoreBoard.innerHTML = total

document.getElementById("play-again-button").addEventListener("click", function (){
    window.location.href="./game.html";
})