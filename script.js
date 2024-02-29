
// define container size.
const CONTAINER_SIZE = 480;

// main code.
console.log("Hello, world!");
generateDivGrid();

// event for resizing the grid - add to resize button.
const resizeButton = document.querySelector("button");
resizeButton.addEventListener("click", evt => {
    const newSize = prompt("How many squares should be on one side? (10-100, default: 16)");
    removeAllSquares();

    if (10 <= newSize && newSize <= 100 && Number.isInteger(newSize)) {
        generateDivGrid(newSize);
    } else {
        alert(`"${newSize}" is not an integer between 10-100. Defaulting to 16.`);
        generateDivGrid();
    }
});

/**
 * Generate the grid.
 * @param {number} squaresPerSide Squares per side of the grid.
 */
function generateDivGrid(squaresPerSide = 16) {
    const gridContainer = document.querySelector(".container");
    const divSize = CONTAINER_SIZE / squaresPerSide;
    console.log(divSize);

    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
        const gridSquareDiv = document.createElement("div");

        // styling.
        gridSquareDiv.style["box-sizing"] = "border-box";
        gridSquareDiv.style["width"] = `${divSize}px`;
        gridSquareDiv.style["height"] = `${divSize}px`;
        gridSquareDiv.style["border"] = "solid 1px black";

        // add event for when mouse hovers over the squares.

        gridContainer.appendChild(gridSquareDiv);
    }
}

/**
 * Remove all squares in the grid.
 */
function removeAllSquares() {
    const gridContainer = document.querySelector(".container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}