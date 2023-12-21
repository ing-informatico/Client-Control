
export async function getClientes() {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await response.json();
    return resultado
}

export async function getCliente(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await response.json();
    return resultado
}

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
