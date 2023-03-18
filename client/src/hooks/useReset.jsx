import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';

export const useReset = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [codeObject, setCodeObject] = useState(null);
    // const { dispatch } = useAuthContext();

    const getCode = async (id) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:42069/api/auth/getCode/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        const codeObject = await response.json();
        console.log(codeObject);
        console.log(id);
        
        if (!response.ok) {
            setIsLoading(false);
            setError(codeObject.error);
        } else {
            setCodeObject(codeObject);
            setIsLoading(false);
        }
    }
    
    const resetPassword = async (email, password, confirmPassword) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:42069/api/auth/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, confirmPassword }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            localStorage.setItem('password', JSON.stringify(json));
            // dispatch({ type: 'RESET', payload: json });
            setIsLoading(false);
        }
    };
    
    return { getCode, resetPassword, codeObject, isLoading, error };
};
