import { useNavigate } from 'react-router-dom'


const NuevoCliente = () => {
  const navigate = useNavigate();

  
  return (
    <>
      <h1 className='text-4xl font-semibold mb-4 text-blue-900'>New Client</h1>
      <p className='text-sm mb-5'>Fill all the fields and create your new client!</p>

      <div className='flex justify-end mt-10'>
        <button className='bg-blue-800 text-white px3 py-1 font-bold uppercase rounded p-3' onClick={() => navigate('/')}>Volver</button>
      </div>
      <div className='flex justify-center mt-10'>
        <div className='w-full max-w-3xl'>
          <form
            className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
            action=''
          >
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='nombre'
              >
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Name'
                id='nombre'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='apellido'
              >
                Last Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Last Name'
                id='apellido'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='empresa'
              >
                Company
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Company'
                id='empresa'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='email'
                placeholder='Email'
                id='email'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='telefono'
              >
                Phone
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default NuevoCliente
