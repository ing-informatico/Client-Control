import { useLoaderData } from 'react-router-dom'
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

    const data = useLoaderData();
    console.log(data);

    return (
        <>
            <h1 className='text-4xl font-semibold mb-4 text-blue-900'>Clientes</h1>
            <p className='text-sm mb-4 mt-2'>Desde aquí puedes administrar los clientes de tu negocio</p>
        </>
    )
}

export default Index
