import { Container, Paper, TextField, Typography } from '@mui/material';

const RegisterPage = () => {
    return (
        <Container>
            <Paper sx={{ display: "flex", justifyContent: "center" }}>
                <Typography>Register</Typography>
                <TextField
                    label="First Name"
                />
                <TextField
                    label="Last Name"
                />
                <TextField
                    label="Role"
                />
                <TextField
                    label="Email"
                />
                <TextField
                    label="Password"
                />
                <TextField
                    label="SAIT ID"
                />
            </Paper>
        </Container>
    );
}

export default RegisterPage;