import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

export default function RootLayout() {
    const { user } = useAuthContext();

    const location = useLocation();
    useEffect(() => {}, [location]);

    return (
        <>
            {user && <Navbar />}
            <Outlet />
        </>
    );
}
