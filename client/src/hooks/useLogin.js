import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:42069/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
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
            // Navigate to the appropriate page for each user role
            const user = res.result;
            const role = res.result.role;   
            switch (role) {
                case 'preceptor':
                    navigate(`/preceptor/home/${user._id}`);
                    break;
                case 'student':
                    navigate('/checklist');
                    break;
                case 'instructor':
                    navigate('/instructor');
                    break;
                case 'academic_chair':
                    navigate('/admin');
                    break;
                default:
                    navigate('never gonna give you up');
            }
        }
    };

    return { login, isLoading, error };
};
