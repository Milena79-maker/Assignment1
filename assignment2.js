function drawTable() {
    const container = document.getElementById("tableContainer");
    container.innerHTML = "";

    const table = document.createElement("table");
    table.border = "1";

    for (let row = 1; row <= 10; row++) {
        const tr = document.createElement("tr");

        for (let col = 1; col <= 10; col++) {
            const td = document.createElement("td");
            td.textContent = row * col;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.appendChild(table);
}