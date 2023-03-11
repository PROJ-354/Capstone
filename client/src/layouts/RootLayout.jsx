import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function RootLayout() {
    const loggedIn = localStorage.getItem('auth');

    const location = useLocation();
    useEffect(() => {}, [location]);

    return (
        <>
            {loggedIn && <Navbar />}
            <Outlet />
        </>
    );
}
