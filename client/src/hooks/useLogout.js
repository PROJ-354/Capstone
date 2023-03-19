import { useAuthContext } from './useAuthContext';

// TODO Link this hook to a logout button.
// See Net Ninja auth episode 11 @4:10 for adding logout button.

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
    };
    return { logout };
};
