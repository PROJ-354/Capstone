import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Week from "./Week";

const data = [
    {
        sunday: { scheduledHours: 0, actualHours: 0, },
        monday: { scheduledHours: 0, actualHours: 0, },
        tuesday: { scheduledHours: 0, actualHours: 0, },
        wednesday: { scheduledHours: 0, actualHours: 0, },
        thursday: { scheduledHours: 0, actualHours: 0, },
        friday: { scheduledHours: 0, actualHours: 0, },
        saturday: { scheduledHours: 0, actualHours: 0, },
    },
    
]

/**
 * this component renders a schedule,
 * aka a list of (8) weeks
 */
const Schedule = () => {
    return (
        <>
            {data && data.map((weekData, index) => (
                <Week weekData={weekData} weekNumber={index+1} />
            ))}
        </>
    );
}

export default Schedule;