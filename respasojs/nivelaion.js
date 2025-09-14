// Hoisting (var, let, const)
var nombre1 = "Emmanuel";
document.write(nombre1);
document.write('<br/>');

let nombre2 = "Carmen";
document.write(nombre2);
document.write('<br/>');

const nombre3 = "Samuel";
document.write(nombre3);
document.write('<br/>');

// Objetos en JavaScript
const Usuario = {
    nombreU: "Mario",
    edad: 20,
    email: "mario@gmail.com"
};

document.write("Usuario => Nombre: " + Usuario.nombreU + ", Edad: " + Usuario.edad + ", Email: " + Usuario.email);
document.write("<br/>");

// Object Destructuring
const {
    nombreU,
    edad,
    email
} = {
    nombreU: "Mario",
    edad: 20,
    email: "mario@gmail.com"
};

document.write("Usuario => Nombre: " + nombreU + ", Edad: " + edad + ", Email: " + email);
document.write("<br/>");

// Operador spread (...)
const obj1 = {
    a: "a",
    b: "b",
    c: "c"
};

const obj2 = {
    d: "d",
    e: "e"
};

const obj3 = {
    ...obj1,
    ...obj2
};

document.write("Obj3 => a: " + obj3.a + ", b: " + obj3.b + ", c: " + obj3.c + ", d: " + obj3.d + ", e: " + obj3.e);
document.write("<br/>");

const [usuario1, usuario2] = ["Juan", "Carlos", "Lucia", "Ana"];
document.write(usuario1, " ", usuario2);
document.write("<br/>");

const [, , usuario3] = ["Juan", "Carlos", "Lucia", "Ana"];
document.write(usuario3);
document.write("<br/>");    

const [, usuario4, , usuario5] = ["Juan", "Carlos", "Lucia", "Ana"];
document.write(usuario4 + " " + usuario5);
document.write("<br/>");

// Arrow Funtions
// function sumar(a, b){
//     return a + b;
// }

const sumar = (a, b) => {
    return a + b;
}

const suma = sumar(10, 5);
document.write("Suma = " + suma);
document.write("<br/>");

// Uso de Intérvalos
const saludar = () => document.write("<li>Hola</li>");
document.write("<ul>");
// Usando la función setInterval para invocar a la función saludar cada cierto tiempo en milisegundos.
setInterval(saludar(), 2000);
document.write("</ul>");
document.write("<br/>");

// Promesas
/** 
 * Las promesas se definen como una función que retorna un objeto llamado Promise, este objeto recibe una función tipo callback con dos parametros:
 * resolve: Representa la respuesta que nos va a devolver en caso de que no lo que procese adentro sea exitosa
 * reject: Representa la respuesta que nos va a devolver en caso de que la que procese adentro no sea exitosa
*/
const dividir = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 == 0){
            reject("No se puede dividir entre 0");
        } else{
            resolve(num1 / num2);
        }
    });
};

const result = dividir(20, 2).then((res) => {
    document.write(`Division = ${res}`);
}).catch((error) => {
    document.write(error);
});

// Peticiones con Fetch
fetch("https://jsonplaceholder.typicode.com/users/5")
    .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

// Uso de fetch con async y await
const peticionesFetchAsync = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
    const fetchData = response.json();

    return fetchData;
}
const data = peticionesFetchAsync().then(console.log);

// Peticiones con Axios
const peticionAxiosAsync = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/9");
    return data;
}
const dataAxios = peticionAxiosAsync().then(cono<sole .log);