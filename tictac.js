let cells = document.querySelectorAll('.cell');

// Event listener for when any cell is clicked
cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);    
}); 

// div that was clicked = e.target
// e = click event
function cellClicked(e) {
    return e.target.textContent = "X";
} if (e.target === "X") {
    function cellClicked(e) {
    return e.target.textContent = "O";
}
}

