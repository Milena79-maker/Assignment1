function drawTable() {
    const rows = document.getElementById("rows").value;
    const cols = document.getElementById("cols").value;

    const container = document.getElementById("tableContainer");
    container.innerHTML = "";

    const table = document.createElement("table");

    for (let r = 1; r <= rows; r++) {
        const tr = document.createElement("tr");

        for (let c = 1; c <= cols; c++) {
            const td = document.createElement("td");
            td.textContent = r * c;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.appendChild(table);
}