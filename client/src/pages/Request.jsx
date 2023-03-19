import { useRequest } from '../hooks/useRequest';
import { useState } from 'react';
import { Typography, Button, Stack, TextField, Link, Alert } from '@mui/material';

const Request = () => {
    const [email, setEmail] = useState('');
    const { sendEmail, isLoading, message, error } = useRequest();
    
    const handleEmail = (event) => {
        event.preventDefault();
        sendEmail(email);
    };

    return (
        <>
            <form className="send_email" onSubmit={handleEmail}>
                <br />                
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Enter your email to receive a password reset link
                </Typography>
                <br />
                {message && <Alert severity='success'>{message}</Alert>}
                {error && <Alert severity='error'>{error}</Alert>}
                <br /><br />
                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Email"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Send email
                    </Button>
                </Stack>
                <br />
                <Stack direction="row" spacing={2}>
                <Typography variant="h6">
                    <Link href="/" underline="hover">
                        Return to login page
                    </Link>
                </Typography>
                </Stack>
            </form>     
        </>
    );
};

export default Request;
