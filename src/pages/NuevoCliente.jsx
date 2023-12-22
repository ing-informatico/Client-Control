import { Form, useNavigate, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario';
import Errors from '../components/Errors';
import { addClient } from './data/Api';

//Action
export async function action({request}) { 
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email');

  //Validando el formulario
  const errors = [];
  if (Object.values(datos).includes('')) { 
    errors.push({message: 'All fields are required'});
  }

  let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!regex.test(email)) {
    errors.push({ message: 'Invalid email' });
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  //Add Client
  await  addClient(datos);


  return redirect('/', { errors });
}



const NuevoCliente = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className='text-4xl font-semibold mb-4 text-blue-900'>New Client</h1>
      <p className='text-sm mb-5'>Fill all the fields and create your new client!</p>

      <div className='flex justify-end mt-10 mt-10'>
        <button className='bg-blue-800 text-white px3 py-1 font-bold uppercase rounded p-3' onClick={() => navigate('/')}>Volver</button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
        {errors?.length && errors.map((error, i) => (<Errors key={i}>{error.message}</Errors>))}
        <Form method='post' noValidate>
          <Formulario />
          <input type="submit" className='bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-900' value='Add Client' />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
