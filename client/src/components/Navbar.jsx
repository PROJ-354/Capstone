import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    Avatar,
    IconButton,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Competency Tracking Tool
                </Typography>
                <Stack direction="row" spacing={2}>
                    {
                        (user.result.role === 'student' && (
                            <>
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/checklist')}
                            >
                                Checklists
                            </Button>

                            <Button
                            size="sm"
                            color="inherit"
                            onClick={() => navigate('/requestpreceptorevaluation')}
                        >
                            Request Preceptor Evaluation
                        </Button>
                        </>
                        ))
                    }
                    {
                        (user.result.role === 'preceptor' && (
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/checklist')}
                            >
                                Something for preceptors
                            </Button>
                        ))
                    }
                    
                    {
                        (user.result.role === 'instructor' && (
                            <Button
                                size="sm"
                                color="inherit"
                                onClick={() => navigate('/checklist')}
                            >
                                Something for instructors
                            </Button>
                        ))
                    }

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
                    <IconButton color="inherit" size="small">
                        <SettingsIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
