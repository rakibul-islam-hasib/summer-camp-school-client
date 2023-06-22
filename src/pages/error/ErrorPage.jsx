import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
const ErrorPage = () => {
    useTitle('404 Page Not Found| Sound Safari');
    const navigate = useNavigate();
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-9xl">404</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Uh-oh!
                </p>

                <p className="mt-4 text-gray-500">We can't find that page.</p>

                <button
                    onClick={() => navigate('/')}
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-secondary rounded hover:bg-secondary focus:outline-none focus:ring"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;