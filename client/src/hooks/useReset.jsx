import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';

export const useReset = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    // const { dispatch } = useAuthContext();
    
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
    
    return { resetPassword, isLoading, error };
};
