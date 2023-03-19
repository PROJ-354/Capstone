import {useState} from 'react';
import {useAuthContext} from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext(); 

    const signup = async (role, sait_id, firstName, lastName, secretCode, email, password, confirmPassword) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:42069/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({role, sait_id, firstName, lastName, secretCode, email, password, confirmPassword})
        });

        const res = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(res.error);
        }
        if (response.ok) {
            localStorage.setItem('auth', JSON.stringify(res));
            dispatch({ type: 'LOGIN', payload: res });
            setIsLoading(false);
        }
    }

    return { signup, isLoading, error }
}
