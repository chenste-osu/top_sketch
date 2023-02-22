
function create_grid(size = 17) {
    for (let row = 1; row < size; row++) {
        var div_row = document.createElement("div");
        div_row.id = "row".concat(row);
        div_row.classList.add("row");

        document.getElementById("container").appendChild(div_row);

        for (let col = 1; col < size; col++) {
            var div_cell = document.createElement("div");
            div_cell.id = "row".concat(row, "col", col);
            div_cell.classList.add("cell");
            div_cell.addEventListener('mouseover', etch);
            document.getElementById("row".concat(row)).appendChild(div_cell);
        }
    }
}

function etch() {
    this.style.backgroundColor = '#0000FF';
}

function resize_grid() {
    let input = prompt("Please enter a new grid size", "16");
    let new_size = parseInt(input);
    
    if (new_size < 1 || new_size > 100 || isNaN(new_size)) {
        alert("Only values between 1 and 100 (inclusive) are allowed. Resetting to default size.")
        new_size = 16;
    }

    let container = document.getElementById("container");
    container.replaceChildren();
    create_grid(new_size + 1);
}

create_grid();

var resize_btn = document.getElementById("resize_btn")
resize_btn.addEventListener("click", resize_grid);