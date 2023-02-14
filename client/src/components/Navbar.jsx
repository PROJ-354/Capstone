import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Stack, TextField, Link} from '@mui/material';
import {useLogout} from '../hooks/useLogout';

const Navbar = () => {
  //functions and variables defined here
  const user = JSON.parse(localStorage.getItem("auth"))
 
    const {logout} = useLogout();
    const handleClick = () => {
        logout();
        window.location.reload(true);
        console.log("you have logged out")
    }




//return jsx component
    return (
    <Box sx={{flexGrow: 1}}>
<AppBar position="static">
    <Stack direction='row' spacing={2}>
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Papiris</Typography>
        </Toolbar>
        <Toolbar>
            <Typography variant="h6">{user?.result ? `${user.result.firstName} ${user.result.lastName}` : "GUEST" }</Typography> 
        </Toolbar>
        <Toolbar>
            <Button color="inherit" onClick={handleClick}>Logout</Button>
        </Toolbar>
    </Stack>
</AppBar>
    </Box>
)
}

export default Navbar;
