import { Navigate, useNavigate } from 'react-router';

/**
 * this utility component protects routes from unauthorized & unauthenticated users >:)
 * @param {any} children children of this component
 * @param {Array} roles an array of strings/enums containing roles allowed to access this route
 * @return the children of this component if the user is authenticated & authorized
 */
const PrivateRoute = ({ children, roles }) => {
    // check if an auth key even exists in local storage
    if (localStorage.getItem('auth') === null) {
        return <Navigate to="/login" replace={true} />;
    }

    // get the authenticated users role
    const thisRole = JSON.parse(localStorage.getItem('auth')).result.role;

    // check if the users role matches with a role in the roles array
    for (let i = 0; i<roles.length; i++) {
        if (roles[i] == thisRole) {
            // everything is good; return children!!
            return children
        }
    }

    // role did not match; return to login page
    return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
