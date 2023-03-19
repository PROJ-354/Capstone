import { useSignup } from '../hooks/useSignup';
import { useState } from 'react';
import {
    Typography,
    Button,
    Stack,
    TextField,
    Link,
    Alert,
    Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [role, setRole] = useState('');
    const [sait_id, setID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [secretCode, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const navigate = useNavigate();

    /* Called by the sign up form onSubmit function.
     */
    const handleLogin = (event) => {
        // Prevent default refresh page behaviour on form submission.
        event.preventDefault();
        signup(
            role,
            sait_id,
            firstName,
            lastName,
            secretCode,
            email,
            password,
            confirmPassword
        );
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
            <form className="signup" onSubmit={handleLogin}>
                <br />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Sign up
                </Typography>
                <br />
                {error && <Alert severity="error">{error}</Alert>}
                <br />
                <br />
                <Stack spacing={2}>
                    <Stack spacing={2} direction="row">
                        <TextField
                            required
                            label="First Name"
                            type="text"
                            onChange={(event) => setFirstName(event.target.value)}
                            value={firstName}
                        />
                        <TextField
                            required
                            label="Last Name"
                            type="text"
                            onChange={(event) => setLastName(event.target.value)}
                            value={lastName}
                        />
                        <TextField
                            required
                            label="Join Code"
                            type="text"
                            onChange={(event) => setCode(event.target.value)}
                            value={secretCode}
                        />
                    </Stack>
                    <TextField
                        required
                        label="Email"
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
                    <TextField
                        required
                        label="Confirm Password"
                        type="password"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        value={confirmPassword}
                    />
                    <Typography variant="h6" color="error">
                        The following inputs are for development purposes only
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <TextField
                            required
                            label="Role"
                            type="text"
                            onChange={(event) => setRole(event.target.value)}
                            value={role}
                        />
                        <TextField
                            required
                            label="ID"
                            type="text"
                            onChange={(event) => setID(event.target.value)}
                            value={sait_id}
                        />
                    </Stack>
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Sign up
                    </Button>
                    <Stack direction="row">
                        <Button variant="text" onClick={() => navigate('/recover')}>
                            Forgot Password
                        </Button>
                        <Button variant="text" onClick={() => navigate('/')}>
                            Back To Home
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Container>
    );
};

export default Signup;
