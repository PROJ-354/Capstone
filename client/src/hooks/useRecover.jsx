import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';

export const useRecover = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    // const { dispatch } = useAuthContext();

    const sendEmail = async (email) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:42069/api/auth/forgot', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            localStorage.setItem('resetCode', JSON.stringify(json));
            // dispatch({ type: 'RESET', payload: json });
            setIsLoading(false);
        }
    };    

    return { sendEmail, isLoading, error };
};