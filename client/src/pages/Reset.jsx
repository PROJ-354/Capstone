import { useRecover } from '../hooks/useRecover';
import { useState } from 'react';
import { Typography, Button, Stack, TextField, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/*
useEffect(() => {
    
    if ()
});
*/
/*

const Reset = () => {
    const [email, setEmail] = useState('');
    const [recoveryCode, setRecoveryCode] = useState('');
    const { resetPassword, error, isLoading } = useRecover();

    const handlePassword = (event) => {
        event.preventDefault();
        resetPassword(email);
    };

    return (
        <div onLoad={CheckID}>
            <form className="reset_password" onSubmit={handlePassword}>
                <br />                
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Enter your email to receive a password-reset code
                </Typography>
                <br />
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
                    <br />
                    <br />
                </Stack>
            </form>
            <form className="enter_code" onSubmit={handleCode}>
                <br />                
                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Code"
                        type="text"
                        onChange={(event) => setRecoveryCode(event.target.value)}
                        value={recoveryCode}
                    />
                    <Button type="submit" variant="contained" color="" disabled={isLoading}>
                        Validate
                    </Button>
                    <br />
                    <br />
                </Stack>
            </form>
            <br />
            <Stack direction="row" spacing={2}>
                <Typography variant="h6">
                    <Link href="/" underline="hover">
                        Return to login page
                    </Link>
                </Typography>
            </Stack>
            {error && <div className="error">{error}</div>}
        <div/>
    );
};
*/
export default Reset;