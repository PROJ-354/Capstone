import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    Avatar,
    IconButton,
    Box,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLogout } from '../hooks/useLogout';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../img/sait-logo.png';

const Navbar = () => {
    //functions and variables defined here
    const { user } = useAuthContext();

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
        <AppBar position="static">
            <Toolbar>
                {/* <Link
                    href={
                        user.result.role.toLowerCase() === 'student'
                            ? '/student/home'
                            : user.result.role.toLowerCase() === 'preceptor'
                            ? '/preceptor/home'
                            : user.result.role.toLowerCase() === 'instructor'
                            ? '/instructor/home'
                            : user.result.role.toLowerCase() === 'administrator'
                            ? '/admin/home'
                            : '/login'
                    }
                    underline={false}
                > */}
                <Box component="img" src={logo} sx={{ height: 40 }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Competency Tracking Tool
                </Typography>
                {/* </Link> */}
                <Stack direction="row" spacing={2}>
                    {user.result.role.toLowerCase() === 'student' && (
                        <>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/student/home')}
                            >
                                Checklists
                            </Button>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/student/schedule')}
                            >
                                Schedules
                            </Button>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/student/evaluation')}
                            >
                                Evaluations
                            </Button>
                        </>
                    )}
                    {user.result.role.toLowerCase() === 'preceptor' && (
                        <>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/preceptor/home')}
                            >
                                Home
                            </Button>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/preceptor/schedule')}
                            >
                                Schedules
                            </Button>
                        </>
                    )}

                    {user.result.role.toLowerCase() === 'instructor' && (
                        <>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/instructor/home')}
                            >
                                Home
                            </Button>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/instructor/schedule')}
                            >
                                Schedules
                            </Button>
                        </>
                    )}

                    {user.result.role.toLowerCase() === 'administrator' && (
                        <Button
                            size="sm"
                            color="inherit"
                            onClick={() => navigate('/admin/home')}
                        >
                            Home
                        </Button>
                    )}

                    <Button
                        size="sm"
                        variant="contained"
                        color="error"
                        onClick={handleClick}
                    >
                        Logout
                    </Button>
                    <Avatar>
                        {user && user.result.firstName.charAt(0).toUpperCase()}
                        {user && user.result.lastName.charAt(0).toUpperCase()}
                    </Avatar>
                    {/* <IconButton color="inherit" size="small">
                        <SettingsIcon />
                    </IconButton> */}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
