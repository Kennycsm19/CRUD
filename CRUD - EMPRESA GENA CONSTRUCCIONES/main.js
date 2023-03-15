let Fila = null;

function onSubmit() {
  const DataForm = leerFormulario();
  if (Fila == null) {
    insertarFila(DataForm);
  } else {
    actualizarFila(DataForm);
    vaciarFormulario();
  }
}

function leerFormulario() {
  const DataForm = {
    nom: document.getElementById("nom").value,
    ape: document.getElementById("ape").value,
    pais: document.getElementById("pais").value,
  };
  return DataForm;
}

function insertarFila(data) {
  const table = document.getElementById("tabla").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.length);
  const columna1 = newRow.insertCell(0);
  columna1.innerHTML = data.nom;
  const columna2 = newRow.insertCell(1);
  columna2.innerHTML = data.ape;
  const columna3 = newRow.insertCell(2);
  columna3.innerHTML = data.pais;
  const columna4 = newRow.insertCell(3);
  columna4.innerHTML = `<input class="submit" type="button" onClick="editarFila(this)" value="Editar">
                        <input class="submit" type="button" onClick="borrarFila(this)" value="Borrar">`;
  vaciarFormulario();
}

function vaciarFormulario() {
  document.getElementById("nom").value = "";
  document.getElementById("ape").value = "";
  document.getElementById("pais").value = "";
  Fila = null;
  document.getElementById("nom").focus();
}

function editarFila(td) {
  Fila = td.parentElement.parentElement;
  document.getElementById("nom").value = Fila.cells[0].innerHTML;
  document.getElementById("ape").value = Fila.cells[1].innerHTML;
  document.getElementById("pais").value = Fila.cells[2].innerHTML;
}

function actualizarFila(data) {
  Fila.cells[0].innerHTML = data.nom;
  Fila.cells[1].innerHTML = data.ape;
  Fila.cells[2].innerHTML = data.pais;
  vaciarFormulario();
}

function borrarFila(td) {
  if (confirm("¿Tas seguro?")) {
    const row = td.parentElement.parentElement;
    document.getElementById("tabla").deleteRow(row.rowIndex);
    vaciarFormulario();
  }
}
