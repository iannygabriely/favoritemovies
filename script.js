document.getElementById('filmForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const director = document.getElementById('director').value.trim();
    if (title && director) {
        addFilm(title, director);
        this.reset();
    }
});

function addFilm(title, director) {
    const table = document.getElementById('filmsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    
    cell1.textContent = title;
    cell2.textContent = director;
    cell3.appendChild(createActionsButtons(newRow));
}

function createActionsButtons(row) {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.addEventListener('click', function() {
        editFilm(row);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Apagar';
    deleteBtn.addEventListener('click', function() {
        row.remove();
    });

    const container = document.createElement('div');
    container.appendChild(editBtn);
    container.appendChild(deleteBtn);
    return container;
}

function editFilm(row) {
    const title = prompt("Novo título:", row.cells[0].textContent);
    const director = prompt("Novo diretor:", row.cells[1].textContent);
    if (title !== null && title.trim() !== '') row.cells[0].textContent = title;
    if (director !== null && director.trim() !== '') row.cells[1].textContent = director;
}