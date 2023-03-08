import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
    const loggedIn = !localStorage.getItem('auth') ? false : true;

    return (
        <Box>
            {loggedIn && <Navbar />}
            <Outlet />
        </Box>
    );
}
