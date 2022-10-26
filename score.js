// Iteration 8: Making scoreboard functional
let score = sessionStorage.getItem("score");

document.getElementById("score-board").innerText = score;

document.getElementById("play-again-button").onclick = () => {
    window.location = "game.html";
};