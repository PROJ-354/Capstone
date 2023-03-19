import { useReset } from '../hooks/useReset';
import { useState, useEffect } from 'react';
import { Typography, Button, Stack, TextField, Link, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';

const Reset = () => {
    const { id } = useParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { getCode, resetPassword, isLoading, message, error } = useReset();

    useEffect(() => {
        const wrapper = async () => {
            const value = await getCode(id);
            setEmail(value);
        };
        wrapper();
    }, []);

    const handlePassword = (event) => {
        event.preventDefault();
        resetPassword(id, email, password, confirmPassword);
    };

    return (
        <form className="reset_password" onSubmit={handlePassword}>
            <br />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Enter your new password
            </Typography>
            <br />
            {message && <Alert severity="success">{message}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <br />
            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                    <TextField
                        label="ConfirmPassword"
                        type="password"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        value={confirmPassword}
                    />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Reset password
                    </Button>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Typography variant="h6">
                        <Link href="/" underline="hover">
                            Return to login page
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
        </form>
    );
};

export default Reset;
