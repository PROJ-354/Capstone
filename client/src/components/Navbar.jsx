import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    Stack,
    TextField,
    Link,
} from '@mui/material';
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    //functions and variables defined here
    const user = JSON.parse(localStorage.getItem('auth'));

    const navigate = useNavigate();

    const { logout } = useLogout();
    const handleClick = () => {
        logout();
        //window.location.reload(true);
        console.log('you have logged out');
        navigate('/');
    };

    //return jsx component
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Stack direction="row" spacing={2}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Competency Tracking Tool
                        </Typography>
                    </Toolbar>
                    <Toolbar>
                        <Typography variant="h6">
                            {user && (
                                <Stack direction="row" spacing={6}>
                                    <Typography variant="h6">
                                        {user.result.firstName} {user.result.lastName}
                                    </Typography>
                                    <Button color="inherit" onClick={handleClick}>
                                        Logout
                                    </Button>
                                </Stack>
                            )}
                        </Typography>
                    </Toolbar>
                    <Toolbar>
                        <Button
                            color="inherit"
                            onClick={() =>
                                navigate('/checklist/63ebfbda6549b2938d8c11f1')
                            }
                        >
                            Checklist
                        </Button>
                    </Toolbar>
                </Stack>
            </AppBar>
        </Box>
    );
};

export default Navbar;
