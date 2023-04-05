import { useAdminManageJoinCode } from '../../hooks/useAdminManageJoinCode';
import { useState } from 'react';
import { Typography, Button, Stack, TextField, Link, Alert } from '@mui/material';

const AdminManageJoinCode = () => {
    const { getInstructorCode, resetJoinCode, isLoading, message, error } = useAdminManageJoinCode();
    const [joinCode, setJoinCode] = useState('');

    const handleInstructorCode = (event) => {
        event.preventDefault();
        getInstructorCode();
    }

    const handleResetJoinCode = (event) => {
        event.preventDefault();
        resetJoinCode(joinCode);
    }

    return (
        <>
            {message && <Alert severity='success'>{message}</Alert>}
            {error && <Alert severity='error'>{error}</Alert>}
            <br />
            <Stack direction="row" spacing={2}>
                <form className="instructor_code" onSubmit={handleInstructorCode}>
                    <br /><br />
                    <Stack direction="row" spacing={2}>
                        <Button type="submit" variant="contained" disabled={isLoading}>
                            Generate instructor join code
                        </Button>
                    </Stack>
                </form>
            </Stack>         
            <Stack direction="row" spacing={2}>
                <form className="reset_code" onSubmit={handleResetJoinCode}>
                    <br /><br />
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

export default AdminManageJoinCode;
