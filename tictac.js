let cells = document.querySelectorAll('.cell');

let markers = ["X", "O"];

let whoseTurn = 0;

let gameOver = false;

cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);
});

function startGame() {
    e.target.innerHTML = "X";
    document.getElementById("message").innerHTML = "X's turn";
}

function cellClicked(e) {
    if (!gameOver) {
    if (e.target.innerHTML === "X" || e.target.innerHTML === "O") {
        return;
    }
    e.target.innerHTML = markers[whoseTurn];
    checkWin();
    if (!gameOver) {
        toggle();
}
}

function toggle() {
    if (whoseTurn === 0) {
        whoseTurn = 1;
    } else {
        whoseTurn = 0;
    } 
    document.getElementById("message").innerHTML = markers[whoseTurn] + "'s Turn";
}

function checkWin(e) {
    if (document.getElementById('c1').innerHTML === "X" && document.getElementById('c2').innerHTML === "X" && document.getElementById('c3').innerHTML === "X" ||
        document.getElementById('c4').innerHTML === "X" && document.getElementById('c5').innerHTML === "X" && document.getElementById('c6').innerHTML === "X" ||
        document.getElementById('c7').innerHTML === "X" && document.getElementById('c8').innerHTML === "X" && document.getElementById('c9').innerHTML === "X" ||
        document.getElementById('c1').innerHTML === "X" && document.getElementById('c5').innerHTML === "X" && document.getElementById('c9').innerHTML === "X" ||
        document.getElementById('c1').innerHTML === "X" && document.getElementById('c4').innerHTML === "X" && document.getElementById('c7').innerHTML === "X" ||
        document.getElementById('c2').innerHTML === "X" && document.getElementById('c5').innerHTML === "X" && document.getElementById('c8').innerHTML === "X" ||
        document.getElementById('c3').innerHTML === "X" && document.getElementById('c6').innerHTML === "X" && document.getElementById('c9').innerHTML === "X" ||
        document.getElementById('c3').innerHTML === "X" && document.getElementById('c5').innerHTML === "X" && document.getElementById('c7').innerHTML === "X") 
        {
            gameOver = true;
            alert("X is the winner!");
            document.getElementById("message").innerHTML = "Game Over!";
    } else if 
        (document.getElementById('c1').innerHTML === "O" && document.getElementById('c2').innerHTML === "O" && document.getElementById('c3').innerHTML === "O"||
        document.getElementById('c4').innerHTML === "O" && document.getElementById('c5').innerHTML === "O" && document.getElementById('c6').innerHTML === "O" ||
        document.getElementById('c7').innerHTML === "O" && document.getElementById('c8').innerHTML === "O" && document.getElementById('c9').innerHTML === "O" ||
        document.getElementById('c1').innerHTML === "O" && document.getElementById('c5').innerHTML === "O" && document.getElementById('c9').innerHTML === "O" ||
        document.getElementById('c1').innerHTML === "O" && document.getElementById('c4').innerHTML === "O" && document.getElementById('c7').innerHTML === "O" ||
        document.getElementById('c2').innerHTML === "O" && document.getElementById('c5').innerHTML === "O" && document.getElementById('c8').innerHTML === "O" ||
        document.getElementById('c3').innerHTML === "O" && document.getElementById('c6').innerHTML === "O" && document.getElementById('c9').innerHTML === "O" ||
        document.getElementById('c3').innerHTML === "O" && document.getElementById('c5').innerHTML === "O" && document.getElementById('c7').innerHTML === "O") 
        {
            gameOver = true;
            alert("O is the winner!");
            document.getElementById("message").innerHTML = "Game Over!";
    } else if 
        (document.getElementById('c1').innerHTML && document.getElementById('c2').innerHTML && document.getElementById('c3').innerHTML && 
        document.getElementById('c4').innerHTML && document.getElementById('c5').innerHTML && document.getElementById('c6').innerHTML &&
        document.getElementById('c7').innerHTML && document.getElementById('c8').innerHTML && document.getElementById('c9').innerHTML !== "&nbsp;") {
            gameOver = true;
            alert("It's a draw!");
            document.getElementById("message").innerHTML = "Game Over!";
        }
    }       
}

function reset() {
    if (gameOver = true) {
        document.onclick("board") = " ";
    }
}