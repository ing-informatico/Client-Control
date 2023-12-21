import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cliente = ({ cliente }) => {
    const navigate = useNavigate();

    Cliente.propTypes = {
        cliente: PropTypes.shape({
            id: PropTypes.number,
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
                    <button
                        type='button'
                        onClick={() => navigate(`/client/${cliente.id}/edit`)}
                        className='flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold'
                    >
                        Update
                    </button>
                </td>
                <td className='border px-4 py-2'>
                    <button
                        type='button'
                        className='flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold'
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Cliente;
