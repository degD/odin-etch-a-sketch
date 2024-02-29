
const CONTAINER_SIZE = 480;

console.log("Hello, world!");
generateDivGrid();

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

function generateDivGrid(squaresPerSide = 16) {
    const gridContainer = document.querySelector(".container");
    const divSize = CONTAINER_SIZE / squaresPerSide;
    console.log(divSize);

    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
        const gridSquareDiv = document.createElement("div");

        gridSquareDiv.style["box-sizing"] = "border-box";
        gridSquareDiv.style["width"] = `${divSize}px`;
        gridSquareDiv.style["height"] = `${divSize}px`;
        gridSquareDiv.style["border"] = "solid 1px black";

        gridContainer.appendChild(gridSquareDiv);
    }
}

function removeAllSquares() {
    const gridContainer = document.querySelector(".container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}