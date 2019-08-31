const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (r = 0; r < (rows * cols); r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "grid-item";
    container.appendChild(row).id ="btn";
  };
};



makeRows(16, 16);
var btns = document.querySelectorAll('#btn');
btns.forEach((btn) => {

  // and for each one we add a 'click' listener
  btn.addEventListener('click', () => {
    btn.style.cssText = 'background: black'; 
  });
});

function reset(){
  btns.forEach((btn) => {
    btn.style.cssText = 'background: white'; 
  });
}