import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from './useAuthContext';

export const useReset = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    //const [resetCode, setResetCode] = useState(null);
    // const { dispatch } = useAuthContext();

    const getCode = async (id) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:42069/api/auth/getCode/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        const object = await response.json();

        if (object == null) {
            setIsLoading(false);
            alert("link has expired");
            navigate("/");
        } else {
            const email = object.resetCode.email;
            setIsLoading(false);
            return email;
        }
    }
    
    const resetPassword = async (email, password, confirmPassword) => {
        setIsLoading(true);
        setError(null);
        console.log(email)
        console.log(password, confirmPassword);

        const response = await fetch('http://localhost:42069/api/auth/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, confirmPassword }),
        });

        const json = await response.json();

        if (!response.ok) {
            alert("unable to change password");
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            //localStorage.setItem('password', JSON.stringify(json));
            // dispatch({ type: 'RESET', payload: json });
            alert("password was successfully changed to " + password);
            setIsLoading(false);
            navigate("/");
        }
    };
    
    return { getCode, resetPassword, isLoading, error };
};
