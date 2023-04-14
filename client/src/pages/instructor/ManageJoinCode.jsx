import { useManageJoinCode } from '../../hooks/useManageJoinCode';
import { useState } from 'react';
import { Button, Stack, TextField, Alert } from '@mui/material';

const ManageJoinCode = () => {
    const { getStudentCode, getPreceptorCode, resetJoinCode, isLoading, message, error } =
        useManageJoinCode();
    const [joinCode, setJoinCode] = useState('');
    const auth = JSON.parse(localStorage.getItem('auth'));
    const id = auth.result._id;

    const handleStudentCode = (event) => {
        event.preventDefault();
        getStudentCode(id);
    };

    const handlePreceptorCode = (event) => {
        event.preventDefault();
        getPreceptorCode(id);
    };

    const handleResetJoinCode = (event) => {
        event.preventDefault();
        resetJoinCode(joinCode);
    };

    return (
        <>
            {message && <Alert severity="success">{message}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <br />
            <Stack direction="row" spacing={2}>
                <form className="student_code" onSubmit={handleStudentCode}>
                    <br />
                    <br />
                    <Stack direction="row" spacing={2}>
                        <Button type="submit" variant="contained" disabled={isLoading}>
                            Generate student join code
                        </Button>
                    </Stack>
                </form>
            </Stack>
            <br />
            <Stack direction="row" spacing={2}>
                <form className="preceptor_code" onSubmit={handlePreceptorCode}>
                    <Stack direction="row" spacing={2}>
                        <Button type="submit" variant="contained" disabled={isLoading}>
                            Generate preceptor join code
                        </Button>
                    </Stack>
                </form>
            </Stack>
            <Stack direction="row" spacing={2}>
                <form className="reset_join_code" onSubmit={handleResetJoinCode}>
                    <br />
                    <br />
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="Join Code"
                            type="text"
                            onChange={(event) => setJoinCode(event.target.value)}
                            value={joinCode}
                        />
                        <Button type="submit" variant="contained" disabled={isLoading}>
                            Reset join code expiry date
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </>
    );
};

export default ManageJoinCode;
