import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente';
export function loader() {
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Google'
        },
        {
            id: 2,
            nombre: 'Pablo',
            telefono: 102013313,
            email: 'test2@test.com',
            empresa: 'Facebook'
        },
        {
            id: 3,
            nombre: 'Pedro',
            telefono: 102013313,
            email: 'test3@test.com',
            empresa: 'Amazon'
        },
        {
            id: 4,
            nombre: 'Luis',
            telefono: 102013313,
            email: 'test4@test.com',
            empresa: 'Apple'
        },
        {
            id: 5,
            nombre: 'Carlos',
            telefono: 102013313,
            email: 'test5@test.com',
            empresa: 'Microsoft'
        },
        {
            id: 6,
            nombre: 'Jose',
            telefono: 102013313,
            email: 'test6@test.com',
            empresa: 'Oracle'
        },
        {
            id: 7,
            nombre: 'Andres',
            telefono: 102013313,
            email: 'test7@test.com',
            empresa: 'IBM'
        },
        {
            id: 8,
            nombre: 'Jorge',
            telefono: 102013313,
            email: 'test8@test.com',
            empresa: 'Intel'
        },
        {
            id: 9,
            nombre: 'Javier',
            telefono: 102013313,
            email: 'test9@test.com',
            empresa: 'HP'
        },
        {
            id: 10,
            nombre: 'Ricardo',
            telefono: 102013313,
            email: 'test10@test.com',
            empresa: 'Dell'
        }
    ];
    return clientes;
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
