import { useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario';


const NuevoCliente = () => {
  const navigate = useNavigate();

  
  return (
    <>
      <h1 className='text-4xl font-semibold mb-4 text-blue-900'>New Client</h1>
      <p className='text-sm mb-5'>Fill all the fields and create your new client!</p>

      <div className='flex justify-end mt-10'>
        <button className='bg-blue-800 text-white px3 py-1 font-bold uppercase rounded p-3' onClick={() => navigate('/')}>Volver</button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
        <Formulario />
      </div>
    </>
  )
}

export default NuevoCliente
