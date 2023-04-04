import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import Week from './Week';

/**
 * this component renders a schedule,
 * aka a list of (8) weeks
 */
const Schedule = () => {
    //
    const [weeks, setWeeks] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dialogState, setDialogState] = useState(false);

    // mreow
    const authenticatedUsersStudentId = JSON.parse(localStorage.getItem('auth')).result.sait_id;
    const authenticatedUsersObjId = JSON.parse(localStorage.getItem('auth')).result._id;

    // todo: fetch & render the logged in users schedule
    useEffect(() => {
        async function fn() {
            const response = await fetch(
                `http://localhost:42069/api/schedules/student/${authenticatedUsersStudentId}`
            );
            const json = await response.json();
            setIsSubmitted(json.is_sumbitted)
            setWeeks(json.weeks);
        }

        fn();
    }, []);

    // handle submission
    async function handleSubmission(e) {
        e.preventDefault();
        const response = await fetch(`http://localhost:42069/api/schedules/student/submit/${authenticatedUsersStudentId}`, { method: 'PUT' });
        const json = await response.json();
        console.log(json)
        setIsSubmitted(!isSubmitted);
        setDialogState(!dialogState);
    }

    //
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <Box>
                    {weeks &&
                        weeks.map((weekData, index) => (
                            <Week
                                weekData={weekData}
                                weekNumber={index + 1}
                                isSubmitted={isSubmitted}
                                key={index}
                            />
                        ))}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                <Button variant="contained" color="success" onClick={handleSubmission} disabled={isSubmitted}>
                    Submit
                </Button>
            </Box>

            <Dialog open={dialogState}>
                <DialogTitle>Sumbission Successful!</DialogTitle>
                <DialogActions>
                    <Button
                        variant='contained'
                        onClick={(e) => setDialogState(!dialogState)}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Schedule;
