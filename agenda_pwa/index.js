const db = new Dexie("Agenda Contactos");
db.version(1).stores({
    contactos: "++id, nombre, telefono, correo"
});

const form = document.getElementById("new-task-form");
const inputNombre = document.getElementById("new-task-input1");
const inputTelefono = document.getElementById("new-task-input2");
const inputCorreo = document.getElementById("new-task-input3");
const list_el = document.getElementById("tasks");

// Add contacto
form.onsubmit = async (event) => {
    event.preventDefault();
    const nombre = inputNombre.value;
    const telefono = inputTelefono.value;
    const correo = inputCorreo.value;
    await db.contactos.add({
        nombre: nombre,
        telefono: telefono,
        correo: correo
    });
    await getContactos();
    form.reset();
};

const getContactos = async() => {
    const allContactos = await db.contactos.reverse().toArray();
    list_el.innerHTML = allContactos.map(
        (contacto) => `
            <tr>
                <td>
                    ${contacto.nombre}
                </td>
                <td>
                    ${contacto.telefono}
                </td>
                <td>
                    ${contacto.correo}
                </td>
                <td onclick="deleteContacto(event, ${contacto.id})">
                    Eliminar
                </td>
            </tr>
        `
    ).join("");
};

window.onload = getContactos;

// Delete Todo
const deleteContacto = async(event, id) => {
    await db.contactos.delete(id);
    await getContactos();
}