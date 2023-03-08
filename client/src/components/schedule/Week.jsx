import { TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";

/**
 * 
 */
const Week = ({ weekData, weekNumber }) => {
    return (
        <>
            <Typography variant="h6" >Week # {weekNumber}</Typography>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Typography>Sunday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={weekData.sunday.scheduledHours}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={weekData.sunday.actualHours}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Monday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={weekData.monday.scheduledHours}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={weekData.monday.actualHours}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Tuesday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={weekData.tuesday.scheduledHours}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={weekData.tuesday.actualHours}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Wednesday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={weekData.wednesday.scheduledHours}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={weekData.wednesday.actualHours}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Thursday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={weekData.thursday.scheduledHours}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={weekData.thursday.actualHours}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Friday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={weekData.friday.scheduledHours}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={weekData.friday.actualHours}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Saturday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={weekData.saturday.scheduledHours}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={weekData.saturday.actualHours}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </>
    );
}

export default Week;