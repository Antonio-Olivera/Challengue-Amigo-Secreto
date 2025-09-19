let listaamigos = [];

function aTitulo(texto) {
  return texto
    .toLowerCase()
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function id(id) {
  return document.getElementById(id);
}

function normalizarEspacios(t) {
  return t.replace(/\s+/g, " ").trim();
}

function renderizarLista() {
  const ul = id("listaAmigos");
  ul.innerHTML = "";

  for (const nombre of listaamigos) {
    ul.innerHTML += `<li style="text-align:center">${nombre}</li>`;
  }
}

function limpiarCaja() {
  id("amigo").value = "";
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  let nombre = normalizarEspacios(input.value);

  if (!nombre) {
    alert("Por favor, escribe un nombre.");
    return;
  }

  const nombreCanonico = aTitulo(nombre);

  if (listaamigos.includes(nombreCanonico)) {
    alert("Ese nombre ya está en la lista.");
    limpiarCaja();
    return;
  }

  listaamigos.push(nombreCanonico);
  console.log(listaamigos)
  renderizarLista();
  limpiarCaja();
}

  

