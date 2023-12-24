/*let color="black";
function populateCanvas(size){
  let canvas = document.querySelector("#canvas");
  let squares = canvas.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  canvas.style.gridTemplateColumns=`repeat(${size},1fr)`
  canvas.style.gridTemplateRows=`repeat(${size},1fr)`

  let totaldivs= size * size;
  for(let i = 0; i < totaldivs; i++){
    let divs = document.createElement("div");
    divs.classList.add("node");
    divs.addEventListener("mouseover",colorSquare);
    canvas.insertAdjacentElement("beforeend",divs);
  }
}*/

color="black";
function populateCanvas(size) {
  let container = document.querySelector("#canvas");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#e0e0e0";
    //Set up “hover” effect so the divs change color using JavaScript
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}
populateCanvas(64);

function colorSquare() {
  color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}