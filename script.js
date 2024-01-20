let color = "";
document.getElementById("black").addEventListener("click", () => {
    color = "black"
    removeExisting();
    createGrid(32);
   })
document.getElementById("rain").addEventListener("click", () => {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    removeExisting();
    createGrid(32);
   })
document.getElementById('reset').addEventListener("click", ()=>{
  removeExisting();
})
function createGrid(n){
 let grid = document.getElementById("canvas");
 grid.style.gridTemplate =`repeat(${n}, 1fr) / repeat(${n}, 1fr)`;
 for (i = 0; i < n*n; i++){
  let div = document.createElement("div");
  div.className = "sketch";
  grid.appendChild(div);
  div.addEventListener("mouseover", function() {
    div.style.backgroundColor = `${color}`;
    
  })
 }
}
function removeExisting(){
  let doc = document.getElementById("canvas");
  doc.replaceChildren();
}