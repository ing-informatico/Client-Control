import { stringify } from "postcss";

//Get all clients
export async function getClientes() {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await response.json();
    return resultado
}


//Get one clientById
export async function getCliente(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await response.json();
    return resultado
}


//Post new client
export async function addClient(cliente) {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json();

    } catch (error) {
        console.log(error);
    }
}


//Update client
export async function updateClient(id, cliente) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json();

    } catch (error) {
        console.log(error);
    }
}


//Delete client
export async function deleteClient(id) { 
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await response.json();

    } catch (error) {
        console.log(error);
    }
}
