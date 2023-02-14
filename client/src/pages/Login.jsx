import {useLogin} from '../hooks/useLogin'
import {useState} from "react";
import {Typography, Button, Stack, TextField, Link} from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    /* Called by the sign up form onSubmit function.
     */
    const handleLogin = async (event) => {
        // Prevent default refresh page behaviour on form submission.
        event.preventDefault();
        await login(email, password);
    }

    /* onChange fires a function that takes in the event.
     * Function sets the email const defined above based on inputed value. 
     * Then set value of the input to the email const for two-way data binding.
     * Clicking the button fires the onSubmit function on the form.
     */
    return (
        <form className="login" onSubmit={handleLogin}>
            <Typography variant='h4' component='h1'>Competency Tracking Tool</Typography><br/>
            <Typography variant='h5' component='h2' sx={{ fontWeight: 'bold' }}>Sign in to your account</Typography><br/>
            <Stack spacing={2}>
                <Stack direction='row' spacing={2}>
                    <TextField label='Email' type='email' onChange={(event) => setEmail(event.target.value)} value={email}/>
                    <TextField label='Password' type='password' onChange={(event) => setPassword(event.target.value)} value={password}/>
                    <Button type="submit" variant="contained" disabled={isLoading}>Sign In</Button><br/><br/>
                </Stack> 
                <Stack spacing={2}>
                    <Typography variant='h6'>
                        <Link href='/signup' underline='hover'>Create an account</Link>
                    </Typography>
                </Stack>            
            </Stack>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default Login;
