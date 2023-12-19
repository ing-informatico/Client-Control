
export async function getClientes() {
    const response = await fetch('');
    const data = await response.json();
    return data;
}
