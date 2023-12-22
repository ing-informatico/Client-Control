import { Form, useNavigate, redirect } from 'react-router-dom';
import { deleteClient } from '../pages/data/Api';
import PropTypes from 'prop-types';

export async function action({ params }) {
    deleteClient(params.id);

    return redirect('/');
}

const Cliente = ({ cliente }) => {
    const navigate = useNavigate();

    Cliente.propTypes = {
        cliente: PropTypes.shape({
            id: PropTypes.number,
            nombre: PropTypes.string,
            empresa: PropTypes.string,
            email: PropTypes.string,
            telefono: PropTypes.string,
            notas: PropTypes.string,
        }).isRequired,
    };
    return (
        <>
            <tr>
                <td className='border px-4 py-2'>{cliente.nombre}</td>
                <td className='border px-4 py-2'>{cliente.empresa}</td>
                <td className='border px-4 py-2'>{cliente.email}</td>
                <td className='border px-4 py-2'>{cliente.telefono}</td>
                <td className='border px-4 py-2'>{cliente.notas}</td>
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
                    <Form method='POST' action={`/client/${cliente.id}/delete`}
                        onSubmit={(e) => {
                            if (!confirm(`Are you sure want to delete this client: ${cliente.nombre}?`)) {
                                e.preventDefault();
                            }
                        }
                        }
                    >
                        <button
                            type='submit'
                            className='flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold'>
                            Delete
                        </button>
                    </Form>
                </td>
            </tr>
        </>
    );
};

export default Cliente;
