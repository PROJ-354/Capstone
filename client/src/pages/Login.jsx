import { useLogin } from '../hooks/useLogin';
import { useState } from 'react';
import { Typography, Button, Stack, TextField, Link, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    const navigate = useNavigate();

    /* Called by the sign up form onSubmit function.
     */
    const handleLogin = (event) => {
        // Prevent default refresh page behaviour on form submission.
        event.preventDefault();
        login(email, password);
        //navigate('/checklist/63ebfbda6549b2938d8c11f1');
    };

    /* onChange fires a function that takes in the event.
     * Function sets the email const defined above based on inputed value.
     * Then set value of the input to the email const for two-way data binding.
     * Clicking the button fires the onSubmit function on the form.
     */
    return (
        <form className="login" onSubmit={handleLogin}>
            <br />                
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Sign in to your account
            </Typography>
            <br />
            {error && <Alert severity='error'>{error}</Alert>}
            <br /><br />
            <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Email"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Sign In
                    </Button>
                    <br />
                    <br />
                </Stack>
                <Stack direction="row" spacing={7.5}>
                    <Typography variant="h6">
                        <Link href="/signup" underline="hover">
                            Create an account
                        </Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link href="/request" underline="hover">
                            Forgot password?
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
        </form>
    );
};

export default Login;
