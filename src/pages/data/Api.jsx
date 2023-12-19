
export async function getClientes() {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await response.json();
    return resultado
}
