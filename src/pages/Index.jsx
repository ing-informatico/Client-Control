import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente';

//Loader
export function loader() {
    console.log(import.meta.env.VITE_API_URL);
    return fetch(`${import.meta.env.VITE_API_URL}/clientes`).then(response => response.json());
}
const Index = () => {

    const clientes = useLoaderData();

    return (
        <>
            <h1 className='text-4xl font-semibold mb-4 text-blue-900'>Client</h1>
            <p className='text-sm mb-4 mt-2'>From here you can list all your clients</p>

            {clientes.length > 0 ? (
                <table className='table-auto w-full shadow-md mt-5'>
                    <thead className='bg-blue-500'>
                        <tr className='text-white'>
                            <th className='w-1/5 py-2'>Name</th>
                            <th className='w-1/5 py-2'>Company</th>
                            <th className='w-1/5 py-2'>Email</th>
                            <th className='w-1/5 py-2'>Phone</th>
                            <th className='w-1/5 py-2'>Delete</th>
                            <th className='w-1/5 py-2'>Update</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {clientes.map(cliente => (
                            <Cliente
                                cliente={cliente}
                                key={cliente.id}
                            />
                        ))}
                    </tbody>
                </table>
            ): (<p className = 'text-center mt-10'>¡No hay clientes para mostrar!</p>)
            }
        </>
    )
}

export default Index
