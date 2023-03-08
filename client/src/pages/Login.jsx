import { useLogin } from '../hooks/useLogin';
import { useState } from 'react';
import { Typography, Button, Stack, TextField, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    const navigate = useNavigate();

    /* Called by the sign up form onSubmit function.
     */
    const handleLogin = async (event) => {
        // Prevent default refresh page behaviour on form submission.
        event.preventDefault();
        await login(email, password);
        navigate('/checklist');
    };

    /* onChange fires a function that takes in the event.
     * Function sets the email const defined above based on inputed value.
     * Then set value of the input to the email const for two-way data binding.
     * Clicking the button fires the onSubmit function on the form.
     */
    return (
        <Container maxWidth="sm" sx={{ padding: '20px' }}>
            <Typography variant="h4" component="h1">
                Competency Tracking Tool
            </Typography>
            <form className="login" onSubmit={handleLogin}>
                <br />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Sign in
                </Typography>
                <br />
                <Stack spacing={2}>
                    <TextField
                        required
                        label="Email Address"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Sign In
                    </Button>
                    <Stack direction="row">
                        <Button variant="text" onClick={() => navigate('/recover')}>
                            Forgot Password
                        </Button>
                        <Button variant="text" onClick={() => navigate('/signup')}>
                            Sign up
                        </Button>
                    </Stack>
                </Stack>
                {error && <div className="error">{error}</div>}
            </form>
        </Container>
    );
};

export default Login;
