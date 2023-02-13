import {useAuthContext} from './useAuthContext';

// TODO Link this hook to a logout button.
// See Net Ninja auth episode 11 @4:10 for adding logout button.

export const useLogout = () => {
    const logout = () => {
        localStorage.removeItem('user');

        dispatchEvent({type: 'LOGOUT'});
    }
    return {logout};
}