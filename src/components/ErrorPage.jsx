import { useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow rounded-md">
                    <h1 className="text-4xl font-bold text-gray-700 text-center mb-6">Client Control</h1>
                    <h1 className="text-4xl font-bold mb-4 text-center">
                        <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500 mr-5" />
                        ¡Error 404!
                    </h1>
                    <p className="text-gray-600">{error.message}</p>
                </div>
            </div>

        </>
    )
}

export default ErrorPage
