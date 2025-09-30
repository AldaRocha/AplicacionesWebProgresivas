let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
        "Raindrops on roses",
        "whiskers on kittens",
        "Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"
    ];
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Programa 1: Juego Piedra, Papel o Tijera
const jugar = (jugador, opcion) => {
    const opciones = [1, 2, 3];
    const nombresOpciones = ["Piedra", "Papel", "Tijera"];
    const computadora = opciones[Math.floor(Math.random() * opciones.length)];
    let result = "";
    if ((jugador === 1 && computadora === 3) || (jugador === 2 && computadora === 1) || (jugador === 3 && computadora === 2)){
        result = "Ganaste";
    } else if (jugador === computadora){
        result = "Empate";
    } else{
        result = "Perdiste";
    }
    document.getElementById("resultado1").innerHTML = `Tú elegiste: <b>${opcion}</b><br>
        La computadora eligió: <b>${nombresOpciones[computadora - 1]}</b><br>
        <span>${result}</span>`;
}

// Programa 2: Calculadora de Edad
const calcularEdad = () => {
    const fechaInput = document.getElementById("fechaNacimiento").value;
    if (!fechaInput){
        document.getElementById("resultado2").innerHTML = "Por favor, introduce una fecha válida.";
        return;
    }

    const nacimiento = new Date(fechaInput);
    const hoy = new Date();

    let anos = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    let dias = hoy.getDate() - nacimiento.getDate();

    if (meses < 0){
        anos--;
        meses += 12;
    }

    if (dias < 0){
        meses--;
        const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        dias += ultimoMes;
    }

    document.getElementById("resultado2").innerHTML = `Han pasado <b>${anos}</b> años, <b>${meses}</b> meses y <b>${dias}</b> días desde que naciste.`;
}

// Programa 3: Arreglo de números aleatorios
const generar = () => {
    const numeros = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
    const lista = numeros.map(num => `<li>${num}</li>`).join("");
    const mayor = numeros.reduce((a, b) => Math.max(a, b));
    const menor = numeros.reduce((a, b) => Math.min(a, b));
    document.getElementById("resultado3").innerHTML = `
        <p><b>Lista de números:</b></p>
        <ul>${lista}</ul>
        <p>Número mayor: <b>${mayor}</b></p>
        <p>Número menor: <b>${menor}</b></p>`;
}

// Programa 4: JSON Placeholder API
let listaUsuarios = [];
const cargarUsuarios = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        listaUsuarios = await res.json();
        const tabla = `
            <table>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                ${listaUsuarios.map(u => `
                    <tr style="color: white;">
                        <td>
                            ${u.id}
                        </td>
                        <td>
                            ${u.name}
                        </td>
                        <td>
                            ${u.username}
                        </td>
                        <td>
                            ${u.email}
                        </td>
                    </tr>`).join("")}
            </table>
        `;

        document.getElementById("usuarios").innerHTML = tabla;
    } catch (error) {
        console.error("Error al traer usuarios:", error);
    }
}

const buscarUsuario = () => {
    const username = document.getElementById("usernameInput").value.trim();
    const usuario = listaUsuarios.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (usuario) {
        document.getElementById("resultado4").innerHTML = `Usuario encontrado:<br>
            ID: <b>${usuario.id}</b><br>
            Name: <b>${usuario.name}</b><br>
            Username: <b>${usuario.username}</b><br>
            Email: <b>${usuario.email}</b>
        `;
    } else {
        document.getElementById("resultado4").innerHTML = "No se encontró el usuario con ese username.";
    }
}