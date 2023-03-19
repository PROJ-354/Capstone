import { useReset } from '../hooks/useReset';
import { useState, useEffect } from 'react';
import { Typography, Button, Stack, TextField, Link } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const Reset = () => {
    const { id } = useParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { getCode, resetPassword, error, isLoading } = useReset();
    const navigate = useNavigate();

    useEffect(() => {
        const wrapper = async () => {
            const value = await getCode(id);
            setEmail(value);
        }
        wrapper();
    }, []);

    const handlePassword = (event) => {
        event.preventDefault();
        resetPassword(email, password, confirmPassword);
    };

    return (
        <form className="reset_password" onSubmit={handlePassword}>
            <br />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Enter your new password
            </Typography><br />
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
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Reset;
