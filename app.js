// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Quita espacios en blanco

    if (nombre === "") {
        alert("Por favor ingrese un nombre");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ""; // Limpiar el campo
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar antes de volver a dibujar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    document.getElementById('listaAmigos').innerHTML = "";

}