import { Form, useNavigate, useActionData, useLoaderData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario';
import Errors from '../components/Errors';
import { getCliente, updateClient } from "./data/Api";

//Loader
export async function loader({ params }) {
    const client = await getCliente(params.id);

    if (Object.values(client).length === 0 || Object.values(client).length === undefined || Object.values(client).length < 1) {
        throw new Error(`Client with id ${params.id} not found`);
    }

    // Validando el formulario
    const errors = [];
    if (Object.values(client).includes('')) {
        errors.push({ message: 'All fields are required' });
    }

    return client;
}


//Action
export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');

    //Validando el formulario
    const errors = [];
    if (Object.values(datos).includes('')) {
        errors.push({ message: 'All fields are required' });
    }

    let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!regex.test(email)) {
        errors.push({ message: 'Invalid email' });
    }

    if (Object.keys(errors).length) {
        return errors;
    }

    //Update Client
    await updateClient(params.id, datos);


    return redirect('/', { errors });
}



const EditClient = () => {
    const navigate = useNavigate();
    const client = useLoaderData();
    const errors = useActionData();

  return (
    <>
        <h1 className='text-4xl font-semibold mb-4 text-blue-900'>Edit Client</h1>
          <p className='text-sm mb-4 mt-2'>From here you can edit a client</p>
          
          <div className='flex justify-end mt-10 mt-10'>
              <button className='bg-blue-800 text-white px3 py-1 font-bold uppercase rounded p-3' onClick={() => navigate('/')}>Volver</button>
          </div>
          <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
              {errors?.length && errors.map((error, i) => (<Errors key={i}>{error.message}</Errors>))}
              <Form method='post' noValidate>
                  <Formulario client = {client}/>
                  <input type="submit" className='bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-900' value='Edit Client' />
              </Form>
          </div>
    </>
  )
}

export default EditClient
