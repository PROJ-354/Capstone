import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from './useAuthContext';

export const useRequest = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    // const { dispatch } = useAuthContext();

    const sendEmail = async (email) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:42069/api/auth/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const object = await response.json();

        if (object == null) {
            alert("Not a valid email");
            setIsLoading(false);
            navigate("/");
        } else {
            // localStorage.setItem('resetCode', JSON.stringify(json));
            // dispatch({ type: 'RESET', payload: json });
            setIsLoading(false);
        }
    };    

    return { sendEmail, isLoading, error };
};
