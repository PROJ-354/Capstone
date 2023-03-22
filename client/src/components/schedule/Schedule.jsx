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

    // mreow
    const authenticatedUsersId = JSON.parse(localStorage.getItem('auth')).result._id;

    // todo: fetch & render the logged in users schedule
    useEffect(() => {
        async function fn() {
            const response = await fetch(
                `http://localhost:42069/api/schedules/${authenticatedUsersId}`
            );
            const json = await response.json();
            setWeeks(json[0].weeks);
        }

        fn();
    }, []);

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
                                key={index}
                            />
                        ))}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                <Button variant="contained" color="success">
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default Schedule;
