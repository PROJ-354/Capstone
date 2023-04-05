import { Typography, Button, Stack, TextField, Link, Alert } from '@mui/material';

const InstructorHome = () => {
    return (
        <>
            <br />                
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Placeholder
            </Typography>
            <br />
            <Typography variant="h6">
                <Link href="/instructor/manageJoinCode" underline="always">
                    Manage Join Codes
                </Link>
            </Typography>
            <Typography variant="h6">
                <Link href="/" underline="hover">
                    Return to login page
                </Link>
            </Typography>
        </>
    );
};

export default InstructorHome;
