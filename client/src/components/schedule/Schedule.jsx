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

// test data
const data = [
    {
        sunday: { scheduledHours: 1, actualHours: 2 },
        monday: { scheduledHours: 3, actualHours: 4 },
        tuesday: { scheduledHours: 5, actualHours: 6 },
        wednesday: { scheduledHours: 7, actualHours: 8 },
        thursday: { scheduledHours: 9, actualHours: 10 },
        friday: { scheduledHours: 11, actualHours: 12 },
        saturday: { scheduledHours: 13, actualHours: 14 },
    },
    {
        sunday: { scheduledHours: 0, actualHours: 0 },
        monday: { scheduledHours: 0, actualHours: 0 },
        tuesday: { scheduledHours: 2, actualHours: 0 },
        wednesday: { scheduledHours: 0, actualHours: 0 },
        thursday: { scheduledHours: 0, actualHours: 0 },
        friday: { scheduledHours: 0, actualHours: 0 },
        saturday: { scheduledHours: 0, actualHours: 0 },
    },
];

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
                    {data &&
                        data.map((weekData, index) => (
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
