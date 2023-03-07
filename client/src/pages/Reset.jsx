import { useReset } from '../hooks/useReset';
import { useState, useEffect } from 'react';
import { Typography, Button, Stack, TextField, Link } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const Reset = () => {
    const { recoveryCode } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { resetPassword, error, isLoading } = useReset();
/*
    useEffect(() => {
        const resetObject = JSON.parse(localstorage.getItem());
        // need code so that I can use email
    });

    // TODO check if recovery code has expired
*/

    // Need to switch recoveryCode for email
    const handlePassword = (event) => {
        event.preventDefault();
        resetPassword(password, confirmPassword, recoveryCode);
    };

    return (
        <form className="reset_password" onSubmit={handlePassword}>
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
                <br />
                <Stack direction="row" spacing={2}>
                    <Typography variant="h6">
                        <Link href="/" underline="hover">
                            Return to login page
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Reset;