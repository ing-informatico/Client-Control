import PropTypes from 'prop-types';

const Cliente = ({ cliente }) => {

    Cliente.propTypes = {
        cliente: PropTypes.shape({
            nombre: PropTypes.string,
            empresa: PropTypes.string,
            email: PropTypes.string,
            telefono: PropTypes.string,
        }).isRequired,
    };
    return (
        <>
            <tr>
                <td className='border px-4 py-2'>{cliente.nombre}</td>
                <td className='border px-4 py-2'>{cliente.empresa}</td>
                <td className='border px-4 py-2'>{cliente.email}</td>
                <td className='border px-4 py-2'>{cliente.telefono}</td>
                <td className='border px-4 py-2'>
                    <button type='button'
                        className='flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold' >
                        Delete
                    </button>
                </td>
                <td className='border px-4 py-2'>
                    <button type='button'
                        className='flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold'>
                        Update
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Cliente
