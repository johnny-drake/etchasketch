const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";

    cell.addEventListener('mouseover',
    e => e.target.classList.add('bg-color')
    )

    // CLEAR GRID WHEN RESET IS CLICKED
    reset.addEventListener("click", clearGrid)
      function clearGrid () {
        cell.classList.remove('bg-color');
    }

    // CLEAR GRID WHEN BUILD IS CLICKED
    build.addEventListener("click", clearSquare)
      function clearSquare () {
        cell.classList.remove('bg-color');
    }
  }
};

    // CONVERTS INPUT TO GRID SIZE
    build.addEventListener("click", convertNum);
      function convertNum () {
        let a = document.getElementById("gridsize").value
        makeRows(a, a);
    }













        