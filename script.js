
const CONTAINER_SIZE = 480;

console.log("Hello, world!");
generateDivGrid();

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