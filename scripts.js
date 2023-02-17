
// create the grid of divs
for (let row = 1; row < 17; row++) {
    var div_row = document.createElement("div");
    // div_row.classList.add("row".concat(row));
    div_row.id = "row".concat(row);
    div_row.style.display = "flex";
    document.getElementById("container").appendChild(div_row);

    for (let col = 1; col < 17; col++) {
        var div_cell = document.createElement("div");
        // div_cell.classList.add("cell".concat(col));

        div_cell.id = "row".concat(row, "col", col);
        div_cell.style.width = "50px";
        div_cell.style.height = "50px";
        div_cell.style.border = "solid";
        document.getElementById("row".concat(row)).appendChild(div_cell);
    }
}