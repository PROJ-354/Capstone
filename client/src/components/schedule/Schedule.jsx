import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
    useScrollTrigger,
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

    // mreow
    const authenticatedUsersId = JSON.parse(localStorage.getItem('auth')).result._id;

    // todo: fetch & render the logged in users schedule
    useEffect(() => {
        async function fn() {
            const response = await fetch(
                `http://localhost:42069/api/schedules/${authenticatedUsersId}`
            );
            const json = await response.json();
            setIsSubmitted(json[0].is_sumbitted)
            setWeeks(json[0].weeks);
        }

        fn();
    }, []);

    // handle submission
    async function handleSubmission(e) {
        e.preventDefault();
        const response = await fetch(`http://localhost:42069/api/schedules/student/submit/${authenticatedUsersId}`, { method: 'PUT' });
        const json =  await response.json();
        alert(json.message) // todo: change to dialog box
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
        </>
    );
};

export default Schedule;
