const post = [{
    id: 1,
    title: 'Mi primer post',
    image: 'https//img.com/1',
    tags: ['javascript', 'webdevelopment']
},{
    id: 2,
    title: 'Mi experiencia con React',
    image: 'https//img.com/2',
    tags: ['javascript', 'webdevelopment', 'react']
},{
    id: 3,
    title: 'Por qué dejé Angular',
    image: 'https//img.com/3',
    tags: ['javascript', 'webdevelopment', 'angular']
}]

// Método Map
// Este método funciona con un ciclo for pero de forma declarativa
document.write("<ul>");
post.map((post) => {
    document.write("<li>" + post.title + "</li>")
});
document.write("</ul>");

// Método Find
document.write(post.find(p => p.title == "Por qué dejé Angular").title + "<br/>");

// Metodo Some
document.write("id = 3 ->" + post.some(post => post.id === 3) + "<br/>");

document.write("Include angular -> " + post.some(post => post.tags.includes("angular")) + "<br/>");

// Método Every
document.write("Every react ->" + post.every(post => post.tags.includes("react")) + "<br/>");